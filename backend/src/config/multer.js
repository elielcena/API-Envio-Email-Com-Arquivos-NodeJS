// importando lib multer
const multer = require("multer");

// importando lib path
const path = require("path");

module.exports = {
  // DEST: caso o cb do destination não for encontrado, por padrão irá usa-lo
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: multer.diskStorage({
    // diretorio onde o arquivo vai ser salvo
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
    // nome do arquivo
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  // tamanho maximo do arquivo aceito nesse caso 10 MB
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  // filtro de extensão permitidas do arquivo
  fileFilter: (req, file, cb) => {
    const permitidos = [
      "application/pdf",
      // "image/jpeg",
      // "image/pjpeg"
    ];
    // caso a extensão do arquivo estiver entre as permitidas o call back vai retornar true, caso não, retornará mensagem de erro
    if (permitidos.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Formato de arquivo inválido!"));
    }
  },
};
