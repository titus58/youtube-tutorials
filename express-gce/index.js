const express = require('express');
const { createLogger, format, transports } = require('winston');
const {LoggingWinston} = require('@google-cloud/logging-winston');

const app = express();

const loggingWinston = new LoggingWinston();

const logger = createLogger({
   format: format.combine(
       format.splat(),
       format.simple()
   ),
   transports: [
       new transports.Console(),
       ...(process.env.CLOUD_ENV === "gcp" ? [loggingWinston] : []),
   ]
});

app.get("/", (req, res) => {
   const name = req.query.name || 'guest';
   logger.info("Received request for %s", name);
   res.send(`Hello ${name}!`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
   logger.info("Server is starting on port %s", port);
});