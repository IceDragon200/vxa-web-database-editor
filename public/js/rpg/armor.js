var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/base_item/feature", "rpg/equip_item"], function (require, exports, feature_1, equip_item_1) {
    var Armor = (function (_super) {
        __extends(Armor, _super);
        function Armor() {
            _super.call(this);
            this.atype_id = 0;
            this.etype_id = 1;
            this.features.push(new feature_1.default(22, 1, 0));
        }
        return Armor;
    })(equip_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Armor;
});
