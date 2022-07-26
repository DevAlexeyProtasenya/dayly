"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFuelPart2 = exports.getFuel = exports.getHorisontalPositions = void 0;
var retrieveData_1 = require("./retrieveData");
var getHorisontalPositions = function () {
    var stringFuels = (0, retrieveData_1.parseToArray)((0, retrieveData_1.retrieveData)('./src/data.txt'));
    return stringFuels.map(function (el) { return parseInt(el); });
};
exports.getHorisontalPositions = getHorisontalPositions;
var getFuel = function (horizontalPositions, selectedPosition) {
    return horizontalPositions.reduce(function (acc, current) {
        return acc + Math.abs(current - selectedPosition);
    }, 0);
};
exports.getFuel = getFuel;
var getFuelPart2 = function (horizontalPositions, selectedPosition) {
    return horizontalPositions.reduce(function (acc, current) {
        var fuel = 0;
        for (var i = 0; i < current - selectedPosition; i++) {
            fuel += i + 1;
        }
        return acc + fuel;
    }, 0);
};
exports.getFuelPart2 = getFuelPart2;
