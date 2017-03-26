var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/base_item"], function (require, exports, base_item_1) {
    var Actor = (function (_super) {
        __extends(Actor, _super);
        function Actor() {
            _super.call(this);
            this.nickname = '';
            this.class_id = 1;
            this.initial_level = 1;
            this.max_level = 99;
            this.character_name = '';
            this.character_index = 0;
            this.face_name = '';
            this.face_index = 0;
            this.equips = [0, 0, 0, 0, 0];
        }
        return Actor;
    })(base_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Actor;
});
