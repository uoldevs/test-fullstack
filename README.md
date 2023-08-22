# Projeto Aplicativo de Gerenciamento de Clientes

## Acesso aos Commits
Para acessar o histórico de commits, visite o [repositório pessoal](https://github.com/heitorsfernandes/projetoUol/commits/1e018b7d75068f71fb935661faa8e46f5343678e).

## Backend
### Tecnologias e Ferramentas
- Plataforma: Node.js
- Framework HTTP: Express
- Banco de Dados: MySQL
- Conteinerização: Docker

Todos os requisitos solicitados foram implementados seguindo uma arquitetura MSC. Os endpoints implementados são:

- `GET /clients`: Buscar informações de todos os clientes cadastrados.
- `POST /clients`: Adicionar um novo cliente no banco de dados.
- `PUT /clients`: Editar um cliente já cadastrado anteriormente.

## Frontend
### Tecnologias e Ferramentas
- Framework Frontend: React
- Componentes: Funcionais
- Gerenciamento de Estado: Context API
- Estilização: Material UI
- Axios

Todos os requisitos solicitados foram implementados seguindo boas práticas de desenvolvimento e arquitetura. O frontend possui duas rotas:

- `/clients`: Página principal que exibe todos os clientes cadastrados.
- `/clients/edit`: Página que acessa o formulário para criar um novo cliente ou editar um já cadastrado anteriormente. Foi feita renderização de componentes para reutilização na mesma página. Os inputs dos formulários também realizam validações usando bibliotecas como `cpf-cnpj-validator` e `email-validator`.

## Rodando a Aplicação com Docker
### Pré-requisitos
Certifique-se de que o Docker e o Docker Compose estejam instalados em sua máquina.

Na raiz do projeto, execute os seguintes comandos para iniciar a aplicação:

```bash
docker-compose up -d --build
``` 

Para iniciar o backend, entre na pasta "backend" e execute os seguintes comandos:
```bash
docker exec -it backapi sh
npm install
npm run dev
``` 

Para iniciar o frontend, entre na pasta "frontend" e execute os seguintes comandos:
```bash
npm install
npm start
``` 

<details>
  <summary><strong>Caso deseje instalar o Docker em sua máquina Linux, siga os passos abaixo:</strong></summary><br />

Desinstale versões anteriores:
```bash
sudo apt-get remove docker* containerd runc
``` 

Habilite a obtenção de repositórios via HTTPS pelo apt-get:
```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
``` 

Adicione a chave GPG oficial do repositório Docker:
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
``` 

Adicione o repositório oficial do Docker no apt:
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
``` 

Atualize os pacotes do apt:
```bash
sudo apt-get update
``` 

Instale a última versão do Docker Engine - Community:
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io
``` 

Adicione seu usuário ao grupo de usuários Docker:
```bash
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
``` 

Inicie o Daemon do Docker:
```bash
sudo systemctl start docker
sudo systemctl enable docker
``` 

Valide a instalação:
```bash
docker run hello-world
``` 

Instale o Docker Compose:
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
``` 

Valide a instalação do Docker Compose:
```bash
docker-compose --version
``` 
</details>
