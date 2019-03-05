"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var array_insert_at_1 = require("@writetome51/array-insert-at");
var array_insert_middle_1 = require("@writetome51/array-insert-middle");
var public_array_container_1 = require("@writetome51/public-array-container");
var PublicArrayInserter = /** @class */ (function (_super) {
    __extends(PublicArrayInserter, _super);
    function PublicArrayInserter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These methods only increase the length of the array, and return the class instance.
    // index can be negative or positive.  If positive, existing items beginning at
    // that index will be pushed to the right to make room.  If negative, existing
    // items ending at that index will be pushed to the left to make room.
    PublicArrayInserter.prototype.at = function (index, values) {
        return this._returnThis_after(array_insert_at_1.insertAt(index, values, this.data));
    };
    // By default, if this.data has odd number of items, values will be inserted just before the
    // middle item. If you want to change the insert position, set the optional offset parameter to +
    // or - whatever integer you want.
    PublicArrayInserter.prototype.middle = function (values, offset) {
        if (offset === void 0) { offset = 0; }
        return this._returnThis_after(array_insert_middle_1.insertMiddle(values, this.data, offset));
    };
    return PublicArrayInserter;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayInserter = PublicArrayInserter;
