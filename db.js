const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://MestreGasolina:1234@cluster0.i0hzwnd.mongodb.net/catalagoFilmes';

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log('Conectado ao MongoDB com sucesso!');
  } catch( error) {
    console.log('Erro ao conectar ao MongoDB:', error.message);
  }
}
module.exports = connectDB;