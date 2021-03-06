/**
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

(function() {
  'use strict';

  /**
   * @ngdoc reachabilityTestController
   * @ngController
   *
   * @description
   * Controller for reachability tests.
   * Serve as the focal point for table actions.
   */

  angular
    .module('bsn.bsndashboard.reachabilitytests')
    .controller('CreateReachTestController', createController);

    createController.$inject = [
      'horizon.app.core.openstack-service-api.keystone',
      'horizon.app.core.openstack-service-api.neutron'
    ]


  function createController(keystone, neutron) {
    var ctrl = this;
    ctrl.model = {};
    ctrl.user = {};
    ctrl.networks = [];

    // Get the current tenant
    keystone.getCurrentUserSession().success(
      function(user) {
        ctrl.user = user;
      }
    );

    // Get the current tenant's segments
    neutron.getNetworks().success(
      function(networks) {
        ctrl.networks = networks;
      }
    );
  }

})();
