define(["require", "exports"], function (require, exports) {
    var Action = (function () {
        function Action() {
            this.skill_id = 1;
            this.condition_type = 0;
            this.condition_param1 = 0;
            this.condition_param2 = 0;
            this.rating = 5;
        }
        return Action;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Action;
});
