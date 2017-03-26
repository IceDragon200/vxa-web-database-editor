define(["require", "exports", "rpg/se", "core/color"], function (require, exports, se_1, color_1) {
    var Timing = (function () {
        function Timing() {
            this.frame = 0;
            this.se = new se_1.default('', 80);
            this.flash_scope = 0;
            this.flash_color = new color_1.default(255, 255, 255, 255);
            this.flash_duration = 5;
        }
        return Timing;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Timing;
});
