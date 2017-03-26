define(["require", "exports"], function (require, exports) {
    var Condition = (function () {
        function Condition() {
            this.turn_ending = false;
            this.turn_valid = false;
            this.enemy_valid = false;
            this.actor_valid = false;
            this.switch_valid = false;
            this.turn_a = 0;
            this.turn_b = 0;
            this.enemy_index = 0;
            this.enemy_hp = 50;
            this.actor_id = 1;
            this.actor_hp = 50;
            this.switch_id = 1;
        }
        return Condition;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Condition;
});
