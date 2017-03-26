define(["require", "exports"], function (require, exports) {
    var Member = (function () {
        function Member() {
            this.enemy_id = 1;
            this.x = 0;
            this.y = 0;
            this.hidden = false;
        }
        return Member;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Member;
});
