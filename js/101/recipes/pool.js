const debug = require('debug')('recipes:pool');
const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'TestUser',
  password: 'password',
  database: 'recipe'
});

pool.on('acquire', function (connection) {
  debug('Connection %d acquired', connection.threadId);
});

pool.on('connection', function (connection) {
  debug('creating connection');
});

pool.on('enqueue', function () {
  debug('Waiting for available connection slot');
});

pool.on('release', function (connection) {
  debug('Connection %d released', connection.threadId);
});

module.exports = pool;