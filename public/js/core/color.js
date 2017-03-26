define(["require", "exports"], function (require, exports) {
    var Color = (function () {
        function Color(r, g, b, a) {
            if (r === void 0) { r = 255; }
            if (g === void 0) { g = 255; }
            if (b === void 0) { b = 255; }
            if (a === void 0) { a = 255; }
            this.red = r;
            this.green = g;
            this.blue = b;
            this.alpha = a;
        }
        Color.prototype.toString = function () {
            return this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha;
        };
        Color.white = function () {
            return new Color(255, 255, 255, 255);
        };
        Color.default = function () {
            return this.white();
        };
        return Color;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Color;
});
