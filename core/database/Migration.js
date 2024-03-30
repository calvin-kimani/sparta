class Migration{
    async createTable(tableName, knex, callBack) {
        if (!knex.schema) {
            throw new Error('Knex schema is not defined.');
        }
        await knex.schema.createTable(tableName, callBack);
    }

    async dropTable(tableName, knex) {
        if (!knex.schema) {
            throw new Error('Knex schema is not defined.');
        }
        await knex.schema.dropTable(tableName);
    }
}

module.exports = Migration;