pipeline {
    agent any

    environment {
        DOCKERHUB_REPO = "awsbasava6/famtree"
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
                sh 'node -v || true'
                sh 'npm -v || true'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKERHUB_REPO-server:latest ./server'
            }
        }

        stage('Test Docker') {
            steps {
                sh 'docker images'
            }
        }

    }
}
