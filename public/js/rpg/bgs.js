var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rpg/audio_file"], function (require, exports, audio_file_1) {
    var BGS = (function (_super) {
        __extends(BGS, _super);
        function BGS() {
            _super.apply(this, arguments);
        }
        return BGS;
    })(audio_file_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BGS;
});
