#!/usr/bin/env node

const { Command } = require('commander');
const { exec } = require('child_process');
const CreateMigration = require(__dirname + '/console/CreateMigration');
const CreateModel = require(__dirname + '/console/CreateModel');
const path = require('path');

const program = new Command();
const knexfile = path.join(__dirname, 'database', 'knexfile.js');
const knexPath = path.join(__dirname, '../node_modules/.bin', 'knex');

program
  .name('sparta')
  .description('CLI for Sparta')
  .version('1.0.0');

function runKnexCommand(command, callback) {
  exec(`${knexPath} ${command} --knexfile ${knexfile}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    if (callback) {
      callback();
    }
  });
}

//MODELS
program.command("make:model <modelName>")
  .description("Create a new model")
  .action((modelName) => CreateModel(modelName));

//MIGRATIONS
program.command('make:migration <migrationName>')
  .description('Create a new migration file')
  .action((migrationName) => CreateMigration(migrationName));

program.command('migration:list')
  .description("List all completed and pending migrations")
  .action(() => runKnexCommand("migrate:list"));

program.command('migrate:latest')
  .description('Run the latest database migrations')
  .action(() => runKnexCommand('migrate:latest'));

program.command('migrate:next')
  .description('Run the next migration that has not yet been run')
  .action(() => runKnexCommand('migrate:up'));

program.command('seed:make <seedName>')
  .description('Create a new seed file called <seedName.js>')
  .action((seedName) => runKnexCommand(`seed:make ${seedName}`));

program.command('seed')
  .description('Seed the database')
  .action(() => runKnexCommand('seed:run'));

program.command('rollback')
  .description('Rollback the last batch of migration')
  .action(() => runKnexCommand('migrate:rollback'));

program.command('rollback:all')
  .description('Rollback all completed migrations')
  .action(() => runKnexCommand('migrate:rollback --all'))

program.parse();
