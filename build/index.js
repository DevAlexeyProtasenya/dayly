"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countFuel_1 = require("./utils/countFuel");
var horizontalPositions = (0, countFuel_1.getHorisontalPositions)().sort(function (a, b) { return a - b; });
var fuels = horizontalPositions.map(function (position) {
    return (0, countFuel_1.getFuelPart2)(horizontalPositions, position);
});
console.log(fuels.sort(function (a, b) { return a - b; })[0]);
