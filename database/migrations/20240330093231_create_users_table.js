const Migration = require('../../core/database/Migration');

class CreateUsersTable extends Migration {
    up(knex) {
        return this.createTable('users', knex, function(table) {
            table.increments();
            table.string('name');
            table.timestamps();
        });
    }

    down(knex) {
        return this.dropTable('users', knex);
    }
}

const users  = new CreateUsersTable;

module.exports = {
    up: users.up.bind(users),
    down: users.down.bind(users)
};
