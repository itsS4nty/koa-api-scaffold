const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const loggerKoa = require('koa-logger');
const cors = require('koa2-cors');
const mount = require('koa-mount');
const auth = require('koa-basic-auth');
require('dotenv').config();
const router = require('./routes/router');

// init
const app = new koa();
// middlewares
app.use(cors()); // Add authorized origins
app.use(loggerKoa());
app.use(bodyparser());
app.use(
	mount(
		'/health',
		auth({
			name: 'user',
			pass: 'password',
		})
	)
);

// routes
app.use(router.routes());

// export server
module.exports = app;
