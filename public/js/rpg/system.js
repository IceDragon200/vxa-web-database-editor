define(["require", "exports", "rpg/system/vehicle", "rpg/system/terms", "rpg/bgm", "rpg/se", "rpg/me", "core/tone"], function (require, exports, vehicle_1, terms_1, bgm_1, se_1, me_1, tone_1) {
    var System = (function () {
        function System() {
            this.game_title = '';
            this.version_id = 0;
            this.japanese = false;
            this.party_members = [1];
            this.currency_unit = '';
            this.elements = [null, ''];
            this.skill_types = [null, ''];
            this.weapon_types = [null, ''];
            this.armor_types = [null, ''];
            this.switches = [null, ''];
            this.variables = [null, ''];
            this.boat = new vehicle_1.default();
            this.ship = new vehicle_1.default();
            this.airship = new vehicle_1.default();
            this.title1_name = '';
            this.title2_name = '';
            this.opt_draw_title = true;
            this.opt_use_midi = false;
            this.opt_transparent = false;
            this.opt_followers = true;
            this.opt_slip_death = false;
            this.opt_floor_death = false;
            this.opt_display_tp = true;
            this.opt_extra_exp = false;
            this.window_tone = new tone_1.default(0, 0, 0);
            this.title_bgm = new bgm_1.default();
            this.battle_bgm = new bgm_1.default();
            this.battle_end_me = new me_1.default();
            this.gameover_me = new me_1.default();
            this.test_battlers = [];
            this.test_troop_id = 1;
            this.start_map_id = 1;
            this.start_x = 0;
            this.start_y = 0;
            this.terms = new terms_1.default();
            this.battleback1_name = '';
            this.battleback2_name = '';
            this.battler_name = '';
            this.battler_hue = 0;
            this.edit_map_id = 1;
            this.sounds = [];
            for (var i = 0; i < 24; ++i) {
                this.sounds.push(new se_1.default());
            }
        }
        return System;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = System;
});
