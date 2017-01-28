"use strict";
var ListModel = (function () {
    function ListModel() {
    }
    return ListModel;
}());
exports.ListModel = ListModel;
var ListItem = (function () {
    function ListItem(value, type) {
        if (type === void 0) { type = ColumnType.Text; }
        this.type = type;
        this.value = value;
    }
    return ListItem;
}());
exports.ListItem = ListItem;
(function (ColumnType) {
    ColumnType[ColumnType["Icon"] = 0] = "Icon";
    ColumnType[ColumnType["Text"] = 1] = "Text";
})(exports.ColumnType || (exports.ColumnType = {}));
var ColumnType = exports.ColumnType;
//# sourceMappingURL=listModel.js.map