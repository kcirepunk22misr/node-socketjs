"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var server_1 = require("./classes/server");
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./routes/router"));
var server = new server_1.Server();
// middlewares
server.app.use(express_1.urlencoded({ extended: true }));
server.app.use(express_1.json());
// CORS
server.app.use(cors_1.default({ origin: true, credentials: true, }));
server.app.use('/', router_1.default);
server.start(function () {
    console.log('Server On Port 3000');
});
