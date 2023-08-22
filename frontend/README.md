# Frontend - Teste UOL - Cadastro de Clientes

Este é um projeto de frontend desenvolvido em React.js que permite gerenciar uma lista de clientes. Ele atende aos seguintes requisitos:

- Exibe uma listagem de clientes contendo todas as informações conforme o layout fornecido.
- Permite a criação de um novo cliente através de um formulário.
- Fornece alertas para o usuário em caso de dados inválidos na tela de edição.
- Realiza validação de CPF e telefone na tela de edição para garantir dados corretos e consistentes.
- Comunica-se com uma API para obter os dados dos clientes cadastrados.

## Tecnologias Utilizadas

- React.js: Uma biblioteca JavaScript para construção de interfaces de usuário.
- Material-UI: Componentes de interface de usuário estilizados para um design moderno.
- Axios: Biblioteca para realizar requisições HTTP à API.
- Outras dependências conforme especificado no arquivo `package.json`.

## Rodando a aplicação

Siga os passos abaixo para testar a aplicação:

1. Certifique-se de ter o servidor backend em execução. Isso é necessário para que o frontend possa se comunicar com a API.
   - Instruções para iniciar o servidor backend podem ser encontradas na documentação do projeto backend.

2. Na raiz do projeto "uol-frontend", execute o seguinte comando para instalar todas as dependências:

   ```bash
   npm install
   ```

3. Após a instalação das dependências, inicie a aplicação com o seguinte comando:

   ```bash
   npm start
   ```

4. O aplicativo será aberto automaticamente em seu navegador padrão na porta 3000.

5. Você verá a lista de clientes na página inicial. Você pode criar um novo cliente clicando no botão "Novo cliente". Certifique-se de preencher todas as informações necessárias no formulário de criação.

6. Para editar um cliente existente, clique no botão de edição ao lado do cliente na lista. A tela de edição permitirá que você faça alterações nos detalhes do cliente.

7. A validação de CPF e telefone será realizada na tela de cadastro. Se algum dos campos não estiver preenchido corretamente, um alerta será exibido.

## Observações

- Este projeto utiliza componentes do Material-UI para uma experiência de usuário mais agradável e moderna.
- O Axios é usado para fazer requisições HTTP à API e obter dados dos clientes.
- Certifique-se de que o servidor backend esteja em execução antes de iniciar o frontend.

Desenvolvido por _Henrique Nascimento_
