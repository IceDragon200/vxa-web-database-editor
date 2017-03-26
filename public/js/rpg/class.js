var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/base_item", "rpg/base_item/feature", "core/table"], function (require, exports, base_item_1, feature_1, table_1) {
    var Class = (function (_super) {
        __extends(Class, _super);
        function Class() {
            _super.call(this);
            this.exp_params = [30, 20, 30, 30];
            this.params = new table_1.default(8, 100);
            for (var i = 0; i < 100; ++i) {
                this.params.set(0, i, 400 + i * 50);
                this.params.set(1, i, 80 + i * 10);
            }
            for (var j = 2; j < 6; ++j) {
                this.params.set(j, i, 15 + i * 5 / 4);
            }
            for (var j = 6; j < 8; ++j) {
                this.params.set(j, i, 30 + i * 5 / 2);
            }
            this.learnings = [];
            this.features.push(new feature_1.default(23, 0, 1));
            this.features.push(new feature_1.default(22, 0, 0.95));
            this.features.push(new feature_1.default(22, 1, 0.05));
            this.features.push(new feature_1.default(22, 2, 0.04));
            this.features.push(new feature_1.default(41, 1));
            this.features.push(new feature_1.default(51, 1));
            this.features.push(new feature_1.default(52, 1));
        }
        return Class;
    })(base_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Class;
});
