pipeline {
    agent any

    environment {
        IMAGE = "shivakrishnavv11/jenkins-cicd-app"
    }

    stages {

        stage('Build Image') {
            steps {
                sh 'docker build -t $IMAGE:latest .'
            }
        }

        stage('Login DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds',
                usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $IMAGE:latest'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop auto-cicd || true
                docker rm auto-cicd || true
                docker run -d -p 3000:3000 --name auto-cicd $IMAGE:latest
                '''
            }
        }

    }
}
