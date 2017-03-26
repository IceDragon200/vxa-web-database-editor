define(["require", "exports"], function (require, exports) {
    var Damage = (function () {
        function Damage() {
            this.type = 0;
            this.element_id = 0;
            this.formula = '0';
            this.variance = 20;
            this.critical = false;
        }
        return Damage;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Damage;
});
