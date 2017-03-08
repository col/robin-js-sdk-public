/*
 * robin-js-sdk
 * http://getrobin.com/
 *
 * Copyright (c) 2014 Robin Powered Inc.
 * Licensed under the Apache v2 license.
 * https://github.com/robinpowered/robin-js-sdk/blob/master/LICENSE
 *
 */

var constants = require('../../util').constants;

module.exports = {

  /**
   * Free-busy Spaces
   * @type {Object}
   */
  spaces: {

    /**
     * Query spaces schedules
     * @param  {Object}   data A data object
     * @return {Function}      A promise
     */
    get: function (data) {
      var path;
      if (data) {
        path = this.constructPath(constants.FREE_BUSY, constants.SPACES);
        return this.Core.POST(path, data);
      } else {
        return this.rejectRequest('Bad Request: A data object is required.');
      }
    }

  }

};
