var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('now', now.unix());

var timestamp = 1473539576;

var current = moment.unix(timestamp);

console.log('now', current.format('MMMM Do, Y @ h:mm A'));
