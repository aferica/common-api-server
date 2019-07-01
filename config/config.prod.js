/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = () => {
  const config = exports = {};

  config.middleware = [];

  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'afericaredis',
      db: 0,
    }
  };

  config.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'aferica',
      // database
      database: 'common',    
    }
  };

  config.porxyOptions = {
    httpUrl: 'http://127.0.0.1:1080',
    socksHost: '127.0.0.1',
    socksPort: 1080
  };

  config.swagger2 = {
    // enable: false, // disable swagger , default true
    base: {
      schemes: [
        'https',
      ],
      host: 'common.aferica.site'
    }
  }

  return config;
};
