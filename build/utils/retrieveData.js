"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToArray = exports.retrieveData = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var retrieveData = function (relativePath) {
    var data = fs_1.default.readFileSync(path_1.default.resolve(relativePath));
    return data.toString();
};
exports.retrieveData = retrieveData;
var parseToArray = function (data) {
    var parsedData = data.split(',');
    return parsedData;
};
exports.parseToArray = parseToArray;
