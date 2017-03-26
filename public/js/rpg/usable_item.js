var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/usable_item/damage", "rpg/base_item"], function (require, exports, damage_1, base_item_1) {
    var UsableItem = (function (_super) {
        __extends(UsableItem, _super);
        function UsableItem() {
            _super.apply(this, arguments);
            this.scope = 0;
            this.occasion = 0;
            this.speed = 0;
            this.success_rate = 100;
            this.repeats = 1;
            this.tp_gain = 0;
            this.hit_type = 0;
            this.animation_id = 0;
            this.damage = new damage_1.default();
            this.effects = [];
        }
        return UsableItem;
    })(base_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = UsableItem;
});
