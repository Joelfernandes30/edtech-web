pipeline {
    agent any

    environment {
        GCP_PROJECT = "bustracking-467614"  // Your GCP Project ID
        GCLOUD_PATH = "/snap/bin"               // Snap gcloud install location
        IMAGE_NAME = "edtech-web"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Joelfernandes30/edtech-web.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    npm install
                    npm run build || npm run dev
                '''
            }
        }

        stage('GCP Auth') {
            steps {
                withCredentials([file(credentialsId: 'gcp-key', variable: 'GCP_KEY_FILE')]) {
                    sh '''
                        ${GCLOUD_PATH}/gcloud auth activate-service-account --key-file="$GCP_KEY_FILE"
                        ${GCLOUD_PATH}/gcloud config set project ${GCP_PROJECT}
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    sudo docker build -t gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:latest .
                '''
            }
        }

        stage('Push to GCR') {
            steps {
                sh '''
                    ${GCLOUD_PATH}/gcloud auth configure-docker gcr.io --quiet
                    sudo docker push gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:latest
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Successfully built and pushed image to GCR: gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:latest"
        }
        failure {
            echo "❌ Build or Push failed. Check logs."
        }
    }
}
