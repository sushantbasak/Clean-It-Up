"use strict";

const express = require("express");
const appSettings = require("../config");
const api = require("../api");
const bodyParser = require("body-parser");
const { errors, isCelebrateError } = require("celebrate");
const { apiResponseGenerator } = require("../init/bootstrap");
const compression = require("compression");
const middleware = async () => {
  const app = express();

  // enable cross domain access
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PUT,POST,DELETE,PATCH"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

  app.use(compression());

  // parse application/x-www-form-urlencoded
  app.use(
    bodyParser.urlencoded({
      extended: false,
      parameterLimit: 10000,
      limit: 1024 * 1024 * 10,
    })
  );

  // parse application/json
  app.use(bodyParser.json({ limit: "30mb" }));
  app.use(apiResponseGenerator);

  // connect to api
  app.use("/api", api);
  app.use((err, req, res, next) => {
    if (isCelebrateError(err)) {
      console.log(err);
      res.sendValidationError(err.message);
      return;
    }
    next();
  });

  return app;
};

module.exports = middleware;
