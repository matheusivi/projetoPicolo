const Pessoa = require("../model/Pessoa");

const createPessoa = async (req, res) => {
  try {
    const novaPessoa = new Pessoa(req.body);
    const pessoaSalva = await novaPessoa.save();
    res.status(201).json(pessoaSalva);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.find();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPessoasById = async (req, res) => {
  try {
    const pessoa = await Pessoa.findById(req.params.id);
    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePessoa = async (req, res) => {
    try {
        const pessoa =await Pessoa.findByIdAndUpdate(req.params.id, req.body, { new: true})
       if(!pessoa) {
            return res.status(404).json( { message: 'Pessoa não encontrada '})
        }
        res.json(pessoa)
    } catch( error ) {
        res.status(500).json( { message: error.message})
    }
}

const deletePessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByIdAndDelete(req.params.id);
    if (!pessoa) {
      res.status(404).json({ message: "Pessoa não encontrada" });
    }

    res.json({ message: "Pessoa deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPessoa,
  getPessoas,
  getPessoasById,
  deletePessoa,
  updatePessoa,
};
