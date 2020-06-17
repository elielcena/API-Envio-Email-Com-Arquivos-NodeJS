# COMO ENVIAR EMAIL COM ARQUIVOS USANDO NODE JS

### Sobre

API REST que envia email com arquivos usando Node Js a partir de um formulário html simples

Backend contem as seguintes tecnologias:

- [express](https://expressjs.com/) como a camada de estrutura / controlador do servidor.
- [multer](https://github.com/expressjs/multer) middleware para lidar com dados multipart/form-data (arquivos)
- [nodemailer](https://nodemailer.com/about/) é um módulo para aplicativos Node.js que permite o envio fácil de e-mails.

Frontend contem as seguintes tecnologias:

- HTML
- CSS
- JAVASCRIPT

### Como Instalar e Usar

- Faça um Fork ou Clone do Repositório.
- abre a pasta do backend no seu terminal e execulte:

```
npm install
```

Contexto de REMETENTE & DESTINATARIO.

- configure um email válido para envios (usará esse email para enviar todos email) no arquivo backend/src/controllers/SendEmailController.js
  - linhas 24 e 25 'user' e 'pass' que será o endereço de email e a senha desse email
- configure o 'FROM' com o mesmo email acima
  - linha 31
- configure o 'TO' para quem chegará esses emails
  - linha 33

### Observação Importante (ATENÇÃO!!!)

Para habilitar seu email enviar acesse o link https://myaccount.google.com/u/0/lesssecureapps?pageId=none e ative a configuração, assim seu email vai estar habilitado para envio através da API.

- após configurar tudo inicie o servidor com o comando:

```
npm start
```

### PRONTO

Simples né?!
