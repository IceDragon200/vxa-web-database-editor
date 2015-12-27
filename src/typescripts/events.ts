class DatabaseUpdate {
	public setup_actor_events() {
		return $("#actors #list").change((e) => DbRenderer.render_current_actor());
	}

	public setup_class_events() {
		return $("#classes #list").change((e) => DbRenderer.render_current_class());
	}

	public setup_skill_events() {
		return $("#skills #list").change((e) => DbRenderer.render_current_skill());
	}

	public setup_item_events() {
		return $("#items #list").change((e) => DbRenderer.render_current_item());
	}

	public setup_weapon_events() {
		return $("#weapons #list").change((e) => DbRenderer.render_current_weapon());
	}

	public setup_armor_events() {
		return $("#armors #list").change((e) => DbRenderer.render_current_armor());
	}

	public setup_enemy_events() {
		return $("#enemies #list").change((e) => DbRenderer.render_current_enemy());
	}

	public setup_troop_events() {
		return $("#troops #list").change((e) => DbRenderer.render_current_troop());
	}

	public setup_state_events() {
		return $("#states #list").change((e) => DbRenderer.render_current_state());
	}

	public setup_animation_events() {
		return $("#animations #list").change((e) => DbRenderer.render_current_animation());
	}

	public setup_terms_events() {
		//
	}

	public setup_events() {
		var func, funcname;
		funcname = "setup_" + (DbRenderer.page_symbol()) + "_events";
		if (func = this[funcname]) {
			return func();
		}
	}
}

window.DbUpdate = new DatabaseUpdate;
