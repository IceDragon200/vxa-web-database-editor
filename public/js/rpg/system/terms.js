define(["require", "exports"], function (require, exports) {
    var Terms = (function () {
        function Terms() {
        }
        Terms.prototype.construct = function () {
            this.basic = [];
            for (var i = 0; i < 8; ++i)
                this.basic.push('');
            this.params = [];
            for (var i = 0; i < 8; ++i)
                this.params.push('');
            this.etypes = [];
            for (var i = 0; i < 5; ++i)
                this.etypes.push('');
            this.commands = [];
            for (var i = 0; i < 23; ++i)
                this.commands.push('');
        };
        return Terms;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Terms;
});
