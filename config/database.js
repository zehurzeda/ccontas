const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/db_finance', { useMongoClient: true });
mongoose.Promise = global.Promise;

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
