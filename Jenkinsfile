pipeline {
    agent any

    environment {
        DOCKER_USER = "awsbasava6"
    }

    stages {

        stage('Cleanup') {
            steps {
                sh 'docker rm -f famtree-server || true'
            }
        }

        stage('Build Image') {
            steps {
                sh 'cd server && docker build -t $DOCKER_USER/famtree-server .'
            }
        }

        stage('Login DockerHub') {
            steps {
                sh 'echo "Awsbasava06@" | docker login -u $DOCKER_USER --password-stdin'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $DOCKER_USER/famtree-server'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 5000:5000 --name famtree-server $DOCKER_USER/famtree-server'
            }
        }

    }
}

