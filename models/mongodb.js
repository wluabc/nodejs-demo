/**
 * Created by WangLu on 2015-07-02.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs-demo');
exports.mongoose = mongoose;