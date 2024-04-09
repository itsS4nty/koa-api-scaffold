/* eslint-disable no-console */
const app = require('./app');
require('dotenv').config();

class ApiServer {
    constructor() {}

    listen = async () => {
        const PORT = process.env.PORT || 3030;
        this.server = app.listen(PORT, async () => {
            console.log(`When it's ${new Date().toLocaleString()} we are getting ready`);
            console.log(`Starting in ${process.env.NODE_ENV} mode`);
            console.log(`Listening on ${PORT}`);
        });
    };

    close = () => {
        this.server.close();
    };

    address = () => {
        return this.server.address();
    };
}

module.exports = { ApiServer };
