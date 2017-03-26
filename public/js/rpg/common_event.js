define(["require", "exports", "rpg/event_command"], function (require, exports, event_command_1) {
    var CommonEvent = (function () {
        function CommonEvent() {
            this.id = 0;
            this.name = '';
            this.trigger = 0;
            this.switch_id = 1;
            this.list = [new event_command_1.default()];
        }
        return CommonEvent;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CommonEvent;
});
