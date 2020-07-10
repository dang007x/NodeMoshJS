const EventEmitter = require('events');
let url = 'https:fb.com/hidang4';

class Logged extends EventEmitter {
    log(message) {              //function log()
        console.log(message);

        this.emit('message', {id: 3, url: url});
    }
}
//module.exports.log = log; //tra lai mot object
 
//module.exports = log; // tra lai mot ham

module.exports = Logged;