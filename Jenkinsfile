pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
               git 'https://github.com/vinhmaiHCMUS/gittest'  
            }
        }
        
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                    withDockerRegistry(credentialsId: 'dockerID', url: 'https://index.docker.io/v1/') {
                      bat 'docker build -t vinhmai/nodejs-hello:v2 .'
                      bat 'docker push vinhmai/nodejs-hello:v2'
                    }
            }
        }
    }

    post {
        always {
            cleanWs()
            bat 'docker system prune -af'
        }
    }
}
