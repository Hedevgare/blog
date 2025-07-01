pipeline {
    agent any
    
    environment {
        REMOTE_USER = "moglico"
        REMOTE_HOST = "159.223.235.105"
        REMOTE_PATH = "/var/www/html/blog"
        SSH_CRED_ID = "VPS-Key"
    }
    
    stages {        
        stage("Install Dependencies") {
            steps {
                bat """
                npm install
                """
            }
        }
        
        stage("Build") {
            steps {
                bat """
                npm run build
                """
            }
        }
        
        stage("Deploy") {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: env.SSH_CRED_ID, keyFileVariable: 'SSH_KEY')]) {
                    bat '''
                    scp -i %SSH_KEY% -r .\\dist\\* %REMOTE_USER%@%REMOTE_HOST%:%REMOTE_PATH%
                    '''
                }
            }
        }
    }
}