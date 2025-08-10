pipeline {
    agent any

    environment {
        GCP_PROJECT = "bustracking-467614"
        GCP_REGION  = "us-central1"
        REPO_NAME   = "edtech-repo"  // New Artifact Registry repository
        IMAGE_NAME  = "edtech-web"
        GCLOUD_PATH = "/var/jenkins_home/google-cloud-sdk/bin"
    }

    stages {

        stage("Clone Repo") {
            steps {
                script {
                    echo "📦 Cloning the repository..."
                    checkout scmGit(
                        branches: [[name: '*/main']],
                        userRemoteConfigs: [[
                            credentialsId: 'github-token',
                            url: 'https://github.com/Joelfernandes30/edtech-web.git'
                        ]]
                    )
                }
            }
        }

        stage("Install Dependencies") {
            steps {
                script {
                    echo "📥 Installing npm dependencies..."
                    sh '''
                    npm install
                    npm run build || echo "No build step defined"
                    '''
                }
            }
        }

        stage("Build & Push Docker Image to Artifact Registry") {
    steps {
        withCredentials([file(credentialsId: 'gcp-key', variable: 'GOOGLE_APPLICATION_CREDENTIALS')]) {
            script {
                echo "🐳 Building and pushing Docker image to AR..."
                sh '''
                export PATH=$PATH:${GCLOUD_PATH}

                # Authenticate with GCP
                gcloud auth activate-service-account --key-file=${GOOGLE_APPLICATION_CREDENTIALS}
                gcloud config set project ${GCP_PROJECT}

                # Create AR repository if not exists
                gcloud artifacts repositories create ${REPO_NAME} \
                    --repository-format=docker \
                    --location=${GCP_REGION} \
                    --description="Docker repository for edtech-web" || true

                # Configure docker system-wide for root (sudo)
                gcloud auth configure-docker ${GCP_REGION}-docker.pkg.dev --quiet --project=${GCP_PROJECT}
                sudo mkdir -p /root/.docker
                sudo cp -r ~/.docker/* /root/.docker/

                # Build and push
                sudo docker build -t ${GCP_REGION}-docker.pkg.dev/${GCP_PROJECT}/${REPO_NAME}/${IMAGE_NAME}:latest .
                sudo docker push ${GCP_REGION}-docker.pkg.dev/${GCP_PROJECT}/${REPO_NAME}/${IMAGE_NAME}:latest
                '''
            }
        }
    }
}

        stage("Deploy to Cloud Run") {
            steps {
                withCredentials([file(credentialsId: 'gcp-key', variable: 'GOOGLE_APPLICATION_CREDENTIALS')]) {
                    script {
                        echo "🚀 Deploying to Cloud Run..."
                        sh '''
                        export PATH=$PATH:${GCLOUD_PATH}

                        gcloud auth activate-service-account --key-file=${GOOGLE_APPLICATION_CREDENTIALS}
                        gcloud config set project ${GCP_PROJECT}

                        gcloud run deploy ${IMAGE_NAME} \
                            --image=${GCP_REGION}-docker.pkg.dev/${GCP_PROJECT}/${REPO_NAME}/${IMAGE_NAME}:latest \
                            --platform=managed \
                            --region=${GCP_REGION} \
                            --allow-unauthenticated
                        '''
                    }
                }
            }
        }
    }
}
