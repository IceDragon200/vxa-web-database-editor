var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var BaseEditor = (function () {
        function BaseEditor() {
            this.data = null;
        }
        BaseEditor.prototype.route = function () {
            return "/api";
        };
        BaseEditor.prototype.json_post = function (route, data, cb) {
            return $.ajax(route, {
                type: "POST",
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (result) { return cb(result); }
            });
        };
        BaseEditor.prototype.post_data = function (wait, cb) {
            return $.ajax(this.route(), {
                type: "POST",
                dataType: "json",
            }).done(function (data) { });
        };
        BaseEditor.prototype.request_data = function (wait, cb) {
            return $.ajax(this.route(), {
                type: "GET",
                async: !wait,
                dataType: "json",
                success: function (data) {
                    if (cb)
                        cb(data);
                }
            });
        };
        BaseEditor.prototype.update_data = function (wait, cb) {
            var _this = this;
            if (wait === void 0) { wait = false; }
            return this.post_data(wait, function (data) {
                _this.data = data;
                console.log("Updated " + (_this.route()));
                if (cb) {
                    return cb();
                }
            });
        };
        BaseEditor.prototype.refresh_data = function (wait, cb) {
            var _this = this;
            this.data = null;
            return this.request_data(wait, function (data) {
                _this.data = data;
                console.log("Refreshed " + (_this.route()));
                if (cb) {
                    return cb();
                }
            });
        };
        BaseEditor.prototype.get_list = function () {
            if (!this.data) {
                this.refresh_data(true);
            }
            return this.data;
        };
        BaseEditor.prototype.get_item = function (id) {
            return this.get_list()[id];
        };
        BaseEditor.prototype.set_item = function (id, item) {
            return this.get_list()[id] = item;
        };
        BaseEditor.prototype.update_item = function (id) {
            return this.json_post((this.route()) + "/" + id, this.get_item(id), function (data) {
                return console.log(data);
                //@set_item(id, data)
            });
        };
        BaseEditor.prototype.swap_item = function (id1, id2) {
            var data, tmp;
            data = this.get_list();
            tmp = data[id1];
            data[id1] = data[id2];
            return data[id2] = tmp;
        };
        return BaseEditor;
    })();
    var ActorsEditor = (function (_super) {
        __extends(ActorsEditor, _super);
        function ActorsEditor() {
            _super.apply(this, arguments);
        }
        ActorsEditor.prototype.route = function () {
            return "/api/actors";
        };
        return ActorsEditor;
    })(BaseEditor);
    var AnimationsEditor = (function (_super) {
        __extends(AnimationsEditor, _super);
        function AnimationsEditor() {
            _super.apply(this, arguments);
        }
        AnimationsEditor.prototype.route = function () {
            return "/api/animations";
        };
        return AnimationsEditor;
    })(BaseEditor);
    var ArmorsEditor = (function (_super) {
        __extends(ArmorsEditor, _super);
        function ArmorsEditor() {
            _super.apply(this, arguments);
        }
        ArmorsEditor.prototype.route = function () {
            return "/api/armors";
        };
        return ArmorsEditor;
    })(BaseEditor);
    var ClassesEditor = (function (_super) {
        __extends(ClassesEditor, _super);
        function ClassesEditor() {
            _super.apply(this, arguments);
        }
        ClassesEditor.prototype.route = function () {
            return "/api/classes";
        };
        return ClassesEditor;
    })(BaseEditor);
    var CommonEventsEditor = (function (_super) {
        __extends(CommonEventsEditor, _super);
        function CommonEventsEditor() {
            _super.apply(this, arguments);
        }
        CommonEventsEditor.prototype.route = function () {
            return "/api/common_events";
        };
        return CommonEventsEditor;
    })(BaseEditor);
    var EnemiesEditor = (function (_super) {
        __extends(EnemiesEditor, _super);
        function EnemiesEditor() {
            _super.apply(this, arguments);
        }
        EnemiesEditor.prototype.route = function () {
            return "/api/enemies";
        };
        return EnemiesEditor;
    })(BaseEditor);
    var ItemsEditor = (function (_super) {
        __extends(ItemsEditor, _super);
        function ItemsEditor() {
            _super.apply(this, arguments);
        }
        ItemsEditor.prototype.route = function () {
            return "/api/items";
        };
        return ItemsEditor;
    })(BaseEditor);
    var SkillsEditor = (function (_super) {
        __extends(SkillsEditor, _super);
        function SkillsEditor() {
            _super.apply(this, arguments);
        }
        SkillsEditor.prototype.route = function () {
            return "/api/skills";
        };
        return SkillsEditor;
    })(BaseEditor);
    var StatesEditor = (function (_super) {
        __extends(StatesEditor, _super);
        function StatesEditor() {
            _super.apply(this, arguments);
        }
        StatesEditor.prototype.route = function () {
            return "/api/states";
        };
        return StatesEditor;
    })(BaseEditor);
    var SystemEditor = (function (_super) {
        __extends(SystemEditor, _super);
        function SystemEditor() {
            _super.apply(this, arguments);
        }
        SystemEditor.prototype.route = function () {
            return "/api/system";
        };
        return SystemEditor;
    })(BaseEditor);
    var TermsEditor = (function (_super) {
        __extends(TermsEditor, _super);
        function TermsEditor() {
            _super.apply(this, arguments);
        }
        TermsEditor.prototype.route = function () {
            return "/api/terms";
        };
        return TermsEditor;
    })(BaseEditor);
    var TilesetsEditor = (function (_super) {
        __extends(TilesetsEditor, _super);
        function TilesetsEditor() {
            _super.apply(this, arguments);
        }
        TilesetsEditor.prototype.route = function () {
            return "/api/tilesets";
        };
        return TilesetsEditor;
    })(BaseEditor);
    var TroopsEditor = (function (_super) {
        __extends(TroopsEditor, _super);
        function TroopsEditor() {
            _super.apply(this, arguments);
        }
        TroopsEditor.prototype.route = function () {
            return "/api/troops";
        };
        return TroopsEditor;
    })(BaseEditor);
    var WeaponsEditor = (function (_super) {
        __extends(WeaponsEditor, _super);
        function WeaponsEditor() {
            _super.apply(this, arguments);
        }
        WeaponsEditor.prototype.route = function () {
            return "/api/weapons";
        };
        return WeaponsEditor;
    })(BaseEditor);
    var DatabaseEditor = (function () {
        function DatabaseEditor() {
            this.animations = new AnimationsEditor();
            this.actors = new ActorsEditor();
            this.armors = new ArmorsEditor();
            this.classes = new ClassesEditor();
            this.common_events = new CommonEventsEditor();
            this.enemies = new EnemiesEditor();
            this.items = new ItemsEditor();
            this.skills = new SkillsEditor();
            this.states = new StatesEditor();
            this.system = new SystemEditor();
            this.terms = new TermsEditor();
            this.tilesets = new TilesetsEditor();
            this.troops = new TroopsEditor();
            this.weapons = new WeaponsEditor();
            this.editors = [
                this.animations,
                this.actors,
                this.armors,
                this.classes,
                this.common_events,
                this.enemies,
                this.items,
                this.skills,
                this.states,
                this.system,
                this.terms,
                this.tilesets,
                this.troops,
                this.weapons,
            ];
        }
        DatabaseEditor.prototype.update_data = function () {
            return this.editors.map(function (editor) {
                editor.update_data();
            });
        };
        DatabaseEditor.prototype.refresh_data = function (cb) {
            var done, len;
            len = this.editors.length;
            done = function () {
                len -= 1;
                if (cb ? len <= 0 : void 0) {
                    return cb();
                }
            };
            console.log("Refreshing Data");
            return this.editors.map(function (editor) { return editor.refresh_data(false, done); });
        };
        return DatabaseEditor;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new DatabaseEditor;
});
