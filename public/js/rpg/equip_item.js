var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/base_item"], function (require, exports, base_item_1) {
    var EquipItem = (function (_super) {
        __extends(EquipItem, _super);
        function EquipItem() {
            _super.call(this);
            this.price = 0;
            this.etype_id = 0;
            this.params = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        return EquipItem;
    })(base_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = EquipItem;
});
