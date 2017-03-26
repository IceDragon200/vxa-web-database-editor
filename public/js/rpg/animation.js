define(["require", "exports", "rpg/animation/frame"], function (require, exports, frame_1) {
    var Animation = (function () {
        function Animation() {
            this.id = 0;
            this.name = '';
            this.animation1_name = '';
            this.animation1_hue = 0;
            this.animation2_name = '';
            this.animation2_hue = 0;
            this.position = 1;
            this.frame_max = 1;
            this.frames = [new frame_1.default()];
            this.timings = [];
        }
        return Animation;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Animation;
});
