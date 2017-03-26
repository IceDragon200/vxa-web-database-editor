define(["require", "exports", "core/table"], function (require, exports, table_1) {
    var Frame = (function () {
        function Frame() {
            this.cell_max = 0;
            this.cell_data = new table_1.default(0, 0);
        }
        return Frame;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Frame;
});
