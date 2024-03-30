const App = require("../app");

class Model {
  constructor() {
    this.db = App.db;
    this.tableName = this.constructor.name.toLowerCase() + 's';
  }

  async checkTableExists() {
    const exists = await this.db.schema.hasTable(this.tableName);
    if (!exists) {
      throw new Error(`Table ${this.tableName} does not exist`);
    }
  }

  async create(data) {
    await this.checkTableExists();
    await this.db(this.tableName).insert(data).returning("*");
  }

  async delete(data) {
    await this.checkTableExists();
    await this.db(this.tableName).where("id", data.id).del();
  }
}

module.exports = Model;