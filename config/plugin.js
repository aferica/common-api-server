'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  swagger2: {
    enable: false,
    package: 'egg-swagger2',
  },
  alinode: {
    enable: true,
    package: 'egg-alinode',
  }
};
