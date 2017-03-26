define(["require", "exports"], function (require, exports) {
    var TestBattler = (function () {
        function TestBattler() {
            this.actor_id = 1;
            this.level = 1;
            this.equips = [0, 0, 0, 0, 0];
        }
        return TestBattler;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TestBattler;
});
