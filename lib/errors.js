'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bitcore-p2p-zcoin Module {0}'
};

module.exports = require('zcore-lib').errors.extend(spec);
