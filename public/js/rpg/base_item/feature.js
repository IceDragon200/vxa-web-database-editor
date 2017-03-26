define(["require", "exports"], function (require, exports) {
    var Feature = (function () {
        function Feature(code, data_id, value) {
            if (code === void 0) { code = 0; }
            if (data_id === void 0) { data_id = 0; }
            if (value === void 0) { value = 0; }
            this.code = code;
            this.data_id = data_id;
            this.value = value;
        }
        return Feature;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Feature;
});
