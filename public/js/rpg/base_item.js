define(["require", "exports"], function (require, exports) {
    var BaseItem = (function () {
        function BaseItem() {
            this.id = 0;
            this.name = '';
            this.icon_index = 0;
            this.description = '';
            this.features = [];
            this.note = '';
        }
        return BaseItem;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BaseItem;
});
