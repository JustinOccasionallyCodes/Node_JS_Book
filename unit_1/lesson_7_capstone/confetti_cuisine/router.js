"use strict";

const httpStatus = require("http-status-codes"),
      contentTypes = require("./contentTypes"),
      utils = require("./utils");

const routes = {
  //?How do these objects work?
  GET: {},
  POST: {}
};

exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
};
//?How to use the action parametre?
exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
