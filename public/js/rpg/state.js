var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/base_item"], function (require, exports, base_item_1) {
    var State = (function (_super) {
        __extends(State, _super);
        function State() {
            _super.apply(this, arguments);
            this.restriction = 0;
            this.priority = 50;
            this.remove_at_battle_end = false;
            this.remove_by_restriction = false;
            this.auto_removal_timing = 0;
            this.min_turns = 1;
            this.max_turns = 1;
            this.remove_by_damage = false;
            this.chance_by_damage = 100;
            this.remove_by_walking = false;
            this.steps_to_remove = 100;
            this.message1 = "";
            this.message2 = "";
            this.message3 = "";
            this.message4 = "";
        }
        return State;
    })(base_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = State;
});
