'use strict'


const { Auth } = require('../../lib/utils')

/**
 * System Status endpoints
 * @module System
 * @param {*} superclass
 */
const System = superclass => class extends superclass {
  /**
   * Get System Time <br>
   *
   * GET /system/time <br>
   *
   * {@link https://developer-pro.bitmart.com/en/spot/#get-system-time}
   */
  getSystemTime() {
    return this.request(Auth.NONE, 'GET', '/system/time')
  }

  /**
   * Get System Service Status <br>
   * 
   * GET /system/service <br>
   * 
   * {@link https://developer-pro.bitmart.com/en/spot/#get-system-service-status}
   */
  getSystemStatus() {
    return this.request(Auth.NONE, 'GET', '/system/service')
  }

}

module.exports = System