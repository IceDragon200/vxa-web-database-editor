define(["require", "exports"], function (require, exports) {
    var Tone = (function () {
        function Tone(r, g, b, a) {
            if (r === void 0) { r = 0; }
            if (g === void 0) { g = 0; }
            if (b === void 0) { b = 0; }
            if (a === void 0) { a = 0; }
            this.red = r;
            this.green = g;
            this.blue = b;
            this.gray = a;
        }
        Tone.prototype.toString = function () {
            return this.red + ", " + this.green + ", " + this.blue + ", " + this.gray;
        };
        Tone.default = function () {
            return new Tone(0, 0, 0, 0);
        };
        return Tone;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Tone;
});
