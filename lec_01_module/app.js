/*
    const logger = require("./logger");
    console.log(logger);
    logger('message'); // neu require tra ve mot ham
    //logger.log("message"); //neu require tra ve mot object
*/

/*
//path module
    const path = require('path');

    let pathObj = path.parse(__dirname);
    console.log(pathObj);
*/

/*
//os module
    const os = require('os');

    let free = os.freemem();
    let disk = os.totalmem();

    console.log(free + ' ' + disk);
*/

/** file system
 *  const fs = require('fs');

    //const files = fs.readdirSync('./');

    //console.log(files);

    fs.readdir('./', function(err, files) {
        if(err) {
            console.log('Err: ' + err);
        }
        else {
            console.log('Result: ' + files);
        }
    });

*/

/** EventEmitter
 *  const EventEmitter = require('events');
    const emitter = new EventEmitter();

//Register events
    emitter.on('messageLog', function(arg) {
    console.log('Hello World ', arg);
});

//Raise events
    emitter.emit('messageLog', {id: 1, name: 'Huong'});
*/

/** EventEmitter extend
 *  const Logged = require('./logger.js');
    const log = new Logged();

    log.on('message', function(arg) {
        console.log(arg);
    })

    log.log('message');
 */

/**
 * 
 */

const http = require('http');
const server = http.createServer(function(req, res) {
    if(req.url === '/') {
        res.write('Hello NodeJS');
        res.end();
    }

    if(req.url ==="api/course") {
        res.write(JSON.stringify(1, 3, 2));
        res.end();
    }
});

server.listen(3000);