pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
               git 'https://github.com/your_git/nodejs-hello'  
            }
        }
        
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                    withDockerRegistry(credentialsId: 'your-docker-hub', url: 'https://index.docker.io/v1/') {
                      bat 'docker build -t your_docker_hub/nodejs-hello:v1 .'
                      bat 'docker push your_docker_hub/nodejs-hello:v1'
                    }
            }
        }
    }

}
