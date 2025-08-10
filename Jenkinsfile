pipeline {
    agent any

    environment {
        GCP_PROJECT = "bustracking-467614"   // Your GCP project ID
        GCLOUD_PATH = "/var/jenkins_home/google-cloud-sdk/bin"
        IMAGE_NAME = "edtech-web"
        IMAGE_TAG = "latest"
        GCR_IMAGE = "gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:${IMAGE_TAG}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Joelfernandes30/edtech-web.git'
            }
        }

        stage('GCP Auth') {
            steps {
                withCredentials([string(credentialsId: 'gcp-key', variable: 'GCP_KEY')]) {
                    sh '''
                        echo "$GCP_KEY" > gcp-key.json
                        ${GCLOUD_PATH}/gcloud auth activate-service-account --key-file=gcp-key.json
                        ${GCLOUD_PATH}/gcloud config set project ${GCP_PROJECT}
                        ${GCLOUD_PATH}/gcloud auth configure-docker --quiet
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                '''
            }
        }

        stage('Tag & Push to GCR') {
            steps {
                sh '''
                    docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${GCR_IMAGE}
                    docker push ${GCR_IMAGE}
                '''
            }
        }
    }

    
}
