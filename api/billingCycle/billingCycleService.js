const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true});

BillingCycle.route('count', function(req, res, next) {
  BillingCycle.count(function(err, value) {
    if(err){
      res.status(500).json({errors: [err]});
    }else {
      res.json({value});
    }
  })
});


module.exports = BillingCycle;
