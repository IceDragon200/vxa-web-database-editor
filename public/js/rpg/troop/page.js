define(["require", "exports", "rpg/troop/page/condition", "rpg/event_command"], function (require, exports, condition_1, event_command_1) {
    var Page = (function () {
        function Page() {
            this.condition = new condition_1.default();
            this.span = 0;
            this.list = [new event_command_1.default()];
        }
        return Page;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Page;
});
