define(["require", "exports"], function (require, exports) {
    var Effect = (function () {
        function Effect(code, data_id, value1, value2) {
            if (code === void 0) { code = 0; }
            if (data_id === void 0) { data_id = 0; }
            if (value1 === void 0) { value1 = 0; }
            if (value2 === void 0) { value2 = 0; }
            this.code = code;
            this.data_id = data_id;
            this.value1 = value1;
            this.value2 = value2;
        }
        return Effect;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Effect;
});
