require('dotenv').config({ path: '../../.env' })

const client = process.env.DB_CONNECTION;
let connection;

switch (client){
    case 'mysql':
        connection = {
            host: process.env.DB_HOST || process.env.MYSQL_HOST || '127.0.0.1',
            port: process.env.MYSQL_PORT || 3306,
            user: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        };
        break;
    case 'pg':
        connection = {
            connectionString: process.env.PG_URL,
            host: process.env.DB_HOST || process.env.DB_HOST || '127.0.0.1',
            port: process.env.PG_PORT || 1234,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
            ssl: process.env.PG_SSL ? { rejectUnauthorized: false } : false,
        };
        break;

    default:
        throw new Error('Supported database clients: mysql, pg');
}

module.exports = {
    development: {
        client: client,
        connection: connection,
        migrations: {
            directory: '../../database/migrations',
            tableName: 'knex_migrations',
        },
        pool: {
            min: 0,
            max: 10,
        },
        seeds:{
            directory: '../../database/seeders',
        },
        useNullAsDefault: true
    }
}