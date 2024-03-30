const fs = require('fs');
const path = require('path');

function createMigrationFile(tableName) {
    const timestamp = new Date().toISOString().replace(/[-T:]/g, '').slice(0, -5);
    const pluralSuffix = tableName.endsWith('s') ? '' : 's';
    const migrationFileName = `${timestamp}_create_${tableName}${pluralSuffix}_table.js`;
    const migrationContent = `const Migration = require('../../core/database/Migration');

class Create${tableName.charAt(0).toUpperCase() + tableName.slice(1)}Table extends Migration {
    up(knex) {
        return this.createTable('${tableName}${pluralSuffix}', knex, function(table) {
            table.increments();
            table.string('name');
            table.timestamps(true, true);
        });
    }

    down(knex) {
        return this.dropTable('${tableName}${pluralSuffix}', knex);
    }
}

const ${tableName}${pluralSuffix}  = new Create${tableName.charAt(0).toUpperCase() + tableName.slice(1)}Table;

module.exports = {
    up: ${tableName}${pluralSuffix}.up.bind(${tableName}${pluralSuffix}),
    down: ${tableName}${pluralSuffix}.down.bind(${tableName}${pluralSuffix})
};
`;

    return { fileName: migrationFileName, content: migrationContent };
}

function CreateMigration(tableName) {
    const { fileName, content } = createMigrationFile(tableName);
    const filePath = path.join(__dirname, '../../', 'database', 'migrations', fileName);

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Error creating migration file:', err.message);
        } else {
            console.log('Migration file created successfully:', fileName);
        }
    });
}

module.exports = CreateMigration;