var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/base_item/feature", "rpg/equip_item"], function (require, exports, feature_1, equip_item_1) {
    var Weapon = (function (_super) {
        __extends(Weapon, _super);
        function Weapon() {
            _super.call(this);
            this.wtype_id = 0;
            this.animation_id = 0;
            this.features.push(new feature_1.default(31, 1, 0));
            this.features.push(new feature_1.default(22, 0, 0));
        }
        return Weapon;
    })(equip_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Weapon;
});
