pipeline {
    agent any

    environment {
        GCP_PROJECT = "bustracking-467614" // Your GCP Project ID
        GCLOUD_PATH = "/var/jenkins_home/google-cloud-sdk/bin"
        IMAGE_NAME = "edtech-web"
        IMAGE_TAG = "latest"
    }

    stages {
        stage("Cloning Github repo to Jenkins") {
            steps {
                script {
                    echo '📥 Cloning the repository...'
                    checkout scmGit(
                        branches: [[name: '*/main']],
                        extensions: [],
                        userRemoteConfigs: [[
                            credentialsId: 'github-token',
                            url: 'https://github.com/Joelfernandes30/edtech-web.git'
                        ]]
                    )
                }
            }
        }

        stage('Installing npm dependencies & Building Project') {
            steps {
                script {
                    echo '📦 Installing npm dependencies & Building Project...'
                    sh '''
                        npm install
                        npm run build || echo "No build script found, skipping build step..."
                    '''
                }
            }
        }

        stage('Building and Pushing Docker Image to GCR') {
            steps {
                withCredentials([file(credentialsId: 'gcp-key', variable: 'GOOGLE_APPLICATION_CREDENTIALS')]) {
                    script {
                        echo '🐳 Building and Pushing Docker Image to GCR...'
                        sh '''
                            export PATH=$PATH:${GCLOUD_PATH}

                            gcloud auth activate-service-account --key-file=${GOOGLE_APPLICATION_CREDENTIALS}
                            gcloud config set project ${GCP_PROJECT}
                            gcloud auth configure-docker --quiet

                            sudo docker build -t gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:${IMAGE_TAG} .
                            sudo docker push gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:${IMAGE_TAG}
                        '''
                    }
                }
            }
        }

        stage('Deploy to Google Cloud Run') {
            steps {
                withCredentials([file(credentialsId: 'gcp-key', variable: 'GOOGLE_APPLICATION_CREDENTIALS')]) {
                    script {
                        echo '🚀 Deploying to Google Cloud Run...'
                        sh '''
                            export PATH=$PATH:${GCLOUD_PATH}

                            gcloud auth activate-service-account --key-file=${GOOGLE_APPLICATION_CREDENTIALS}
                            gcloud config set project ${GCP_PROJECT}

                            gcloud run deploy ${IMAGE_NAME} \
                                --image=gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:${IMAGE_TAG} \
                                --platform=managed \
                                --region=us-central1 \
                                --allow-unauthenticated
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment completed successfully!"
        }
        failure {
            echo "❌ Build or Deployment failed. Check logs."
        }
    }
}
