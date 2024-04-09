require('dotenv').config();
const { ApiServer } = require('./server');

if(process.env.NODE_ENV === 'dev') {
    // eslint-disable-next-line no-console
    console.clear();
}

const server = new ApiServer();

server.listen();
