define(["require", "exports"], function (require, exports) {
    var EventCommand = (function () {
        function EventCommand(code, indent, parameters) {
            if (code === void 0) { code = 0; }
            if (indent === void 0) { indent = 0; }
            if (parameters === void 0) { parameters = []; }
            this.code = code;
            this.indent = indent;
            this.parameters = parameters;
        }
        return EventCommand;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = EventCommand;
});
