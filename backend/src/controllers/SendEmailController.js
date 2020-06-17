// importando lib nodemailer
const nodemailer = require("nodemailer");

module.exports = {
  index(req, res) {
    // capturando dados do body da requisição
    const { nomecompleto, email, telefone, cpf, cargo } = req.body;

    // variavel para setar nome do arquivo (pdf)
    const fileName =
      cpf + "-" + nomecompleto.replace(" ", "-") + "-" + "Curriculo.pdf";

    try {
      // configurando o transporter para enviar o email
      const transporter = nodemailer.createTransport({
        // host smtp do GMAIL
        host: "smtp.gmail.com",
        // porta do host
        port: 587,
        // setando que não vai usar segurança
        secure: false,
        // credenciais de acesso a um email valido (email que fará o envio)
        auth: {
          user: "email.node.js.2020@gmail.com",
          pass: "node@teste2020",
        },
      });

      const emailASerEnviado = {
        // FROM: quem vai enviar (tem que ser mesmo email das credenciais acima)
        from: "Email Node Js <email.node.js.2020@gmail.com>",
        // TO: quem vai receber o email
        to: "seu@email.com",
        // SUBJECT: Assunto do Email
        subject: "Enviando Curríclo Email com Node.js",
        // ATTACHMENTS: buscando o arquivo que sera enviado no email
        attachments: [
          {
            // nome do arquivo + extensão do arquivo
            filename: fileName,
            // diretorio onde o arquivo está + o nome + extensão do arquivo
            path: "tmp/uploads/" + fileName,
          },
        ],
        // corpo do email (nesse caso é um HTML, mas pode ser um 'text:' etc...)
        html:
          "<h1>Nome Completo: " +
          nomecompleto +
          "</h1>" +
          "<h1>Email: " +
          email +
          "</h1>" +
          "<h1>Telefone: " +
          telefone +
          "</h1>" +
          "<h1>CPF: " +
          cpf +
          "</h1>" +
          "<h1>Cargo: " +
          cargo +
          "</h1>",
      };

      // enviando o email
      transporter
        .sendMail(emailASerEnviado)
        // caso sucesso retorna na api status e a mensagem sucesso
        .then((message) => {
          return res.status(200).json({
            code: 200,
            message: "Email enviado com sucesso!",
          });
        })
        // caso erro retorna na api status e a mensagem erro
        .catch((err) => {
          return res.status(400).json({
            code: 400,
            message: err,
          });
        });
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
};
