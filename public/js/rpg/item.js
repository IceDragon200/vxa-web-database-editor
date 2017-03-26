var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/usable_item"], function (require, exports, usable_item_1) {
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            _super.call(this);
            this.scope = 7;
            this.itype_id = 1;
            this.price = 0;
            this.consumable = true;
        }
        return Item;
    })(usable_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Item;
});
