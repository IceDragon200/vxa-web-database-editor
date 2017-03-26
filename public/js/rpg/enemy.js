var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/base_item/feature", "rpg/enemy/drop_item", "rpg/enemy/action", "rpg/base_item"], function (require, exports, feature_1, drop_item_1, action_1, base_item_1) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy() {
            _super.call(this);
            this.battler_name = '';
            this.battler_hue = 0;
            this.exp = 0;
            this.gold = 0;
            this.drop_items = [
                new drop_item_1.default(),
                new drop_item_1.default(),
                new drop_item_1.default(),
            ];
            this.params = [100, 0, 10, 10, 10, 10, 10, 10];
            this.actions = [new action_1.default()];
            this.features.push(new feature_1.default(22, 0, 0.95));
            this.features.push(new feature_1.default(22, 1, 0.05));
            this.features.push(new feature_1.default(31, 1, 0));
        }
        return Enemy;
    })(base_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Enemy;
});
