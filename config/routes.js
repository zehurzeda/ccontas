const express = require('express');

module.exports = function(app) {


  //API Routes
  const router = express.Router();
  app.use('/api', router);

  const billingCycleService = require('../api/billingCycle/billingCycleService');
  billingCycleService.register(router, '/billingCycles');

  const billingSummaryService = require('../api/billingSummary/billingSummaryService');
  router.route('/billingSummary').get(billingSummaryService.getSummary);

};
