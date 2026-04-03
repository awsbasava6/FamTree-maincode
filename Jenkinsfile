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
        
stage('SonarQube Scan') {
    steps {
        withSonarQubeEnv('sonar-server') {
            sh '''
            sonar-scanner \
            -Dsonar.projectKey=jen-sonar \
            -Dsonar.sources=. \
            -Dsonar.host.url=http://100.54.19.114:9000 \
            -Dsonar.login=squ_8727d38153c8fc5d0c7287a5ffb25282145b25f1
            '''
        }
    }
}
}
    }
}

