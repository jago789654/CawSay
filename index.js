const userInfo = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say ( { 
    text : `Hello i'm ${userInfo.name} from ${userInfo.campus} campus and i'm happy to be a Caw `, 
    e : "oO" , 
    T : "U " 
} ) ) ;


