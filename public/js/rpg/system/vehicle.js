define(["require", "exports", "rpg/bgm"], function (require, exports, bgm_1) {
    var Vehicle = (function () {
        function Vehicle() {
            this.character_name = '';
            this.character_index = 0;
            this.bgm = new bgm_1.default();
            this.start_map_id = 0;
            this.start_x = 0;
            this.start_y = 0;
        }
        return Vehicle;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Vehicle;
});
