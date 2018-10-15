'use strict';
const http = require('http');
const logic = require('./routes/logic');
const PORT = 8080;

const requestHandler = (request, response) => {

    if (request.method == 'POST') {
        console.log("New message:");
        var body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {
            console.log("Message: " + body);
        });
        response.writeHead(200, {'Content-Type': 'text/html'});
        const bid = logic.main(body);
        if (typeof bid === 'object') {
            console.log('Bid: ' + bid.bid);
            response.end(JSON.stringify(bid));
        }
        else {
            if (bid === 0) {
                console.log('Post Failed Validation');
            }
            else if(bid === 2) {
                console.log('No bid.')
            }
        }
    }
}

const server = http.createServer(requestHandler)

server.listen(PORT, (err) => {
  if (err) {
    return console.log('Failed strat server.', err)
  }

  console.log(`server is listening on ${PORT}`)
})