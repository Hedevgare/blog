pipeline {
    agent any
    
    environment {
        REMOTE_USER = credentials('VPS-Username')
        REMOTE_HOST = credentials('VPS-IP')
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

        stage("Set Permissions") {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: env.SSH_CRED_ID, keyFileVariable: 'SSH_KEY')]) {
                    bat """
                    ssh -i %SSH_KEY% %REMOTE_USER%@%REMOTE_HOST% "sudo chmod -R 755 %REMOTE_PATH%/posts && sudo chmod 755 %REMOTE_PATH%/_astro && chmod 755 %REMOTE_PATH%/[0-9]*"
                    """
                }
            }
        }
    }
}