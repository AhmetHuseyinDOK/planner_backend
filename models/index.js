const Plan = require('./plan');
const Attendee = require('./attendee');

Plan.hasMany(Attendee);
Attendee.belongsTo(Plan);