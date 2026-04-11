pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "awsbasava6/famtree-server"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'dev', url: 'https://github.com/awsbasava6/FamTree-maincode.git'
            }
        }

        stage('Build Test') {
            steps {
                sh 'echo "Build started..."'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:latest ./server'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    '''
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE:latest'
            }
        }

    }
}
