pipeline {
    agent any

    environment {
        GCLOUD_PATH = "/usr/bin"       // Change if gcloud is in a different location
        GCP_PROJECT = "your-gcp-project-id"
        IMAGE_NAME  = "edtech-web"
        IMAGE_TAG   = "latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Joelfernandes30/edtech-web.git'
            }
        }

        stage('GCP Auth') {
            steps {
                withCredentials([file(credentialsId: 'gcp-key', variable: 'GCP_KEY_FILE')]) {
                    sh """
                        ${GCLOUD_PATH}/gcloud auth activate-service-account --key-file=$GCP_KEY_FILE
                        ${GCLOUD_PATH}/gcloud config set project ${GCP_PROJECT}
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Push to GCR') {
            steps {
                sh """
                    ${GCLOUD_PATH}/gcloud auth configure-docker --quiet
                    docker push gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }
    }

    post {
        success {
            echo "✅ Build & Push completed successfully!"
        }
        failure {
            echo "❌ Build or Push failed. Check logs."
        }
    }
}
