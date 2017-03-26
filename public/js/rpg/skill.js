var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/usable_item"], function (require, exports, usable_item_1) {
    var Skill = (function (_super) {
        __extends(Skill, _super);
        function Skill() {
            _super.call(this);
            this.scope = 1;
            this.stype_id = 1;
            this.mp_cost = 0;
            this.tp_cost = 0;
            this.message1 = '';
            this.message2 = '';
            this.required_wtype_id1 = 0;
            this.required_wtype_id2 = 0;
        }
        return Skill;
    })(usable_item_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Skill;
});
