pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'mi-web:latest'
    }

    stages {
        stage('Clonar el código fuente') {
            steps {
                git 'https://github.com/Martina-Gramajo/Challenge-DevOps'
            }
        }
        
        stage('Compilación e Instalación de Dependencias') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }
        
        stage('Test') {
            steps {
                // Ejecuta pruebas unitarias
                sh 'docker run ${DOCKER_IMAGE} npm test'
            }
        }
        
        stage('Construir imagen Docker') {
            steps {
                // Crea la imagen Docker de mi aplicación
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }
        
        stage('Desplegar en el servidor') {
            steps {
                    sh 'docker run -d -p 8082:3000 ${DOCKER_IMAGE}'
            }
        }
    }
    
    post {
        always {
            echo 'Limpieza de contenedores y recursos temporales'
            sh 'docker system prune -f'
        }
        success {
            echo 'Despliegue exitoso'
        }
        failure {
            echo 'Despliegue fallido'
        }
    }
}
