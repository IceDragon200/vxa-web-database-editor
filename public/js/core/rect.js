define(["require", "exports"], function (require, exports) {
    var Rect = (function () {
        function Rect(x, y, w, h) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (w === void 0) { w = 0; }
            if (h === void 0) { h = 0; }
            this.x = x;
            this.y = y;
            this.width = w;
            this.height = h;
        }
        return Rect;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Rect;
});
