pipeline {

    agent any

    environment {
        IMAGE_NAME = "kunalkumar123/jenkins-demo"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/Kunal455/jenk.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry(
                    'https://index.docker.io/v1/',
                    'dockerhub-creds') {

                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop myapp || true
                docker rm myapp || true

                docker run -d \
                --name myapp \
                -p 4000:4000 \
                ${IMAGE_NAME}:latest
                '''
            }
        }
    }
}