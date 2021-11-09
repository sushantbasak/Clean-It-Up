'use strict';

require('dotenv').config();

const config = {
  development: {
    mongoDb: process.env.DB_URL,
    port: process.env.PORT || 3001,
    serverUrl: process.env.SERVER_URL,
  },
};

const appSettings = { ...config['development'] };

module.exports = appSettings;
