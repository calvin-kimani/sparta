require('dotenv').config();

const knex = require('knex');
const client = process.env.DB_CONNECTION;

let connection;

switch (client) {
    case 'mysql':
        connection = {
            host: process.env.DB_HOST || '127.0.0.1',
            port: process.env.MYSQL_PORT || 3306,
            user: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        };
        break;
    case 'pg':
        connection = {
            connectionString: process.env.PG_URL,
            host: process.env.DB_HOST || '127.0.0.1',
            port: process.env.PG_PORT || 1234,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
            ssl: process.env.PG_SSL ? { rejectUnauthorized: false } : false,
        };
        break;
    default:
        throw new Error('Supported database clients: mysql, pg');
}

const db = knex({
    client: client,
    connection: connection,
});

module.exports = db;