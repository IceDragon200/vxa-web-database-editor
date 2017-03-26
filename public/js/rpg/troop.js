define(["require", "exports", "rpg/troop/page"], function (require, exports, page_1) {
    var Troop = (function () {
        function Troop() {
            this.id = 0;
            this.name = '';
            this.members = [];
            this.pages = [new page_1.default];
        }
        return Troop;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Troop;
});
