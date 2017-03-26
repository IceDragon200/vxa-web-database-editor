define(["require", "exports", "renderer"], function (require, exports, renderer_1) {
    var DatabaseUpdate = (function () {
        function DatabaseUpdate() {
        }
        DatabaseUpdate.prototype.setup_actor_events = function () {
            return $("#actors #list").change(function (e) { return renderer_1.default.render_current_actor(); });
        };
        DatabaseUpdate.prototype.setup_class_events = function () {
            return $("#classes #list").change(function (e) { return renderer_1.default.render_current_class(); });
        };
        DatabaseUpdate.prototype.setup_skill_events = function () {
            return $("#skills #list").change(function (e) { return renderer_1.default.render_current_skill(); });
        };
        DatabaseUpdate.prototype.setup_item_events = function () {
            return $("#items #list").change(function (e) { return renderer_1.default.render_current_item(); });
        };
        DatabaseUpdate.prototype.setup_weapon_events = function () {
            return $("#weapons #list").change(function (e) { return renderer_1.default.render_current_weapon(); });
        };
        DatabaseUpdate.prototype.setup_armor_events = function () {
            return $("#armors #list").change(function (e) { return renderer_1.default.render_current_armor(); });
        };
        DatabaseUpdate.prototype.setup_enemy_events = function () {
            return $("#enemies #list").change(function (e) { return renderer_1.default.render_current_enemy(); });
        };
        DatabaseUpdate.prototype.setup_troop_events = function () {
            return $("#troops #list").change(function (e) { return renderer_1.default.render_current_troop(); });
        };
        DatabaseUpdate.prototype.setup_state_events = function () {
            return $("#states #list").change(function (e) { return renderer_1.default.render_current_state(); });
        };
        DatabaseUpdate.prototype.setup_animation_events = function () {
            return $("#animations #list").change(function (e) { return renderer_1.default.render_current_animation(); });
        };
        DatabaseUpdate.prototype.setup_terms_events = function () {
            //
        };
        DatabaseUpdate.prototype.setup_events = function () {
            var func, funcname;
            funcname = "setup_" + (renderer_1.default.page_symbol()) + "_events";
            if (func = this[funcname]) {
                return func();
            }
        };
        return DatabaseUpdate;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new DatabaseUpdate;
});
