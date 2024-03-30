const express = require('express');
const db = require('./database/Connection');
const Routes = require('../routes/Web');

class App {
  constructor() {
    this.app = express();
    this.db = db;
    this.init();
  }

  init() {
    this.app.use('/', Routes);
  }
}

module.exports = new App().app;