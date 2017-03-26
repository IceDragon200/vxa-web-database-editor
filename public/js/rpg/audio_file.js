define(["require", "exports"], function (require, exports) {
    var AudioFile = (function () {
        function AudioFile(name, volume, pitch) {
            if (name === void 0) { name = ""; }
            if (volume === void 0) { volume = 100; }
            if (pitch === void 0) { pitch = 100; }
            this.name = name;
            this.volume = volume;
            this.pitch = pitch;
        }
        return AudioFile;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AudioFile;
});
