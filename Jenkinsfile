pipeline {
    agent any

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
    }
}

