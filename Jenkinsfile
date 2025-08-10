pipeline {
    agent any

    environment {
        GCP_PROJECT = "bustracking-467614"  // Your GCP project ID
        GCLOUD_PATH = "/var/jenkins_home/google-cloud-sdk/bin"
        IMAGE_NAME = "edtech-web"
        IMAGE_TAG = "latest"
        REPO_NAME = "edtech-web" // Artifact Registry repo name
        REGION = "us-central1" // Change if needed (e.g., us-central1, asia-south1)
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Joelfernandes30/edtech-web.git'
            }
        }

        stage('GCP Authentication') {
            steps {
                withCredentials([file(credentialsId: 'gcp-key', variable: 'GCP_KEY_FILE')]) {
                    sh """
                        ${GCLOUD_PATH}/gcloud auth activate-service-account --key-file=$GCP_KEY_FILE
                        ${GCLOUD_PATH}/gcloud config set project $GCP_PROJECT
                        ${GCLOUD_PATH}/gcloud auth configure-docker ${REGION}-docker.pkg.dev -q
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    sudo docker build -t ${REGION}-docker.pkg.dev/${GCP_PROJECT}/${REPO_NAME}/${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Push to Artifact Registry') {
            steps {
                sh """
                    sudo docker push ${REGION}-docker.pkg.dev/${GCP_PROJECT}/${REPO_NAME}/${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }
    }

    post {
        failure {
            echo "❌ Build or Push failed. Check logs."
        }
        success {
            echo "✅ Image pushed successfully to Artifact Registry."
        }
    }
}
