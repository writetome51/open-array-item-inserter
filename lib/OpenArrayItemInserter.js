"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var insertAt_1 = require("@writetome51/array-insert-at/insertAt");
var insertMiddle_1 = require("@writetome51/array-insert-middle/insertMiddle");
var OpenArrayContainer_1 = require("@writetome51/open-array-container/OpenArrayContainer");
// This class' methods only increase the length of the array, and return the class instance.
var OpenArrayItemInserter = /** @class */ (function (_super) {
    __extends(OpenArrayItemInserter, _super);
    function OpenArrayItemInserter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // index can be negative or positive.
    OpenArrayItemInserter.prototype.at = function (index, values) {
        return this.returnThis_after(insertAt_1.insertAt(index, values, this.data));
    };
    // By default, if this.data has odd number of items, values will be inserted just before the
    // middle item. If you want to change the insert position, set the optional offset parameter to +
    // or - whatever integer you want.
    OpenArrayItemInserter.prototype.middle = function (values, offset) {
        if (offset === void 0) { offset = 0; }
        return this.returnThis_after(insertMiddle_1.insertMiddle(values, this.data, offset));
    };
    return OpenArrayItemInserter;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayItemInserter = OpenArrayItemInserter;
