const knex = require('knex');//Vamos incluir a biblioteca de conexão do knex

const configuration = require('../../knexfile');//Vamos incluir as configurações do arquivo KnexFile.js de para a conexão

const connection = knex(configuration.development);

module.exports = connection;
