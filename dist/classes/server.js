"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var enviroment_1 = require("../global/enviroment");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.port = enviroment_1.SERVER_PORT;
    }
    Server.prototype.start = function (callback) {
        this.app.listen(this.port, callback());
    };
    return Server;
}());
exports.Server = Server;
