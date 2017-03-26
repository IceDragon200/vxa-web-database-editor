import System_Vehicle from "rpg/system/vehicle";
import System_Terms from "rpg/system/terms";
import System_TestBattler from "rpg/system/test_battler";
import BGM from "rpg/bgm";
import SE from "rpg/se";
import ME from "rpg/me";
import Tone from "core/tone";

export default class System {
	public game_title = '';
	public version_id = 0;
	public japanese = false;
	public party_members = [1];
	public currency_unit = '';
	public elements = [null, ''];
	public skill_types = [null, ''];
	public weapon_types = [null, ''];
	public armor_types = [null, ''];
	public switches = [null, ''];
	public variables = [null, ''];
	public boat = new System_Vehicle();
	public ship = new System_Vehicle();
	public airship = new System_Vehicle();
	public title1_name = '';
	public title2_name = '';
	public opt_draw_title = true;
	public opt_use_midi = false;
	public opt_transparent = false;
	public opt_followers = true;
	public opt_slip_death = false;
	public opt_floor_death = false;
	public opt_display_tp = true;
	public opt_extra_exp = false;
	public window_tone = new Tone(0, 0, 0);
	public title_bgm = new BGM();
	public battle_bgm = new BGM();
	public battle_end_me = new ME();
	public gameover_me = new ME();
	public sounds: Array<SE>;
	public test_battlers: Array<System_TestBattler> = [];
	public test_troop_id = 1;
	public start_map_id = 1;
	public start_x = 0;
	public start_y = 0;
	public terms = new System_Terms();
	public battleback1_name = '';
	public battleback2_name = '';
	public battler_name = '';
	public battler_hue = 0;
	public edit_map_id = 1;

	constructor() {
		this.sounds = [];
		for (var i = 0; i < 24; ++i) {
			this.sounds.push(new SE());
		}
	}
}
