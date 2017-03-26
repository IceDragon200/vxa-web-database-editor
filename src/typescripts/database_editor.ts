class BaseEditor {
	public data;

	constructor() {
		this.data = null;
	}

	public route() {
		return "/api";
	}

	public json_post(route, data, cb) {
		return $.ajax(route, {
			type: "POST",
			data: data,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: (result) => cb(result)
		});
	}

	public post_data(wait: boolean, cb?) {
		return $.ajax(this.route(), {
			type: "POST",
			dataType: "json",
		}).done((data) => {});
	}

	public request_data(wait: boolean, cb?) {
		return $.ajax(this.route(), {
			type: "GET",
			async: !wait,
			dataType: "json",
			success: function(data) {
				if (cb) cb(data);
			}
		});
	}

	public update_data(wait: boolean = false, cb?) {
		return this.post_data(wait, (data) => {
			this.data = data;
			console.log("Updated " + (this.route()));
			if (cb) {
				return cb();
			}
		});
	}

	public refresh_data(wait: boolean, cb?) {
		this.data = null;
		return this.request_data(wait, (data) => {
			this.data = data;
			console.log("Refreshed " + (this.route()));
			if (cb) {
				return cb();
			}
		});
	}

	public get_list() {
		if (!this.data) {
			this.refresh_data(true);
		}

		return this.data;
	}

	public get_item(id) {
		return this.get_list()[id];
	}

	public set_item(id, item) {
		return this.get_list()[id] = item;
	}

	public update_item(id) {
		return this.json_post((this.route()) + "/" + id, this.get_item(id), (data) => {
			return console.log(data);
			//@set_item(id, data)
		});
	}

	public swap_item(id1, id2) {
		var data, tmp;
		data = this.get_list();
		tmp = data[id1];
		data[id1] = data[id2];
		return data[id2] = tmp;
	}
}

class ActorsEditor extends BaseEditor {
	public route() {
		return "/api/actors";
	}
}

class AnimationsEditor extends BaseEditor {
	public route() {
		return "/api/animations";
	}
}

class ArmorsEditor extends BaseEditor {
	public route() {
		return "/api/armors";
	}
}

class ClassesEditor extends BaseEditor {
	public route() {
		return "/api/classes";
	}
}

class CommonEventsEditor extends BaseEditor {
	public route() {
		return "/api/common_events";
	}
}

class EnemiesEditor extends BaseEditor {
	public route() {
		return "/api/enemies";
	}
}

class ItemsEditor extends BaseEditor {
	public route() {
		return "/api/items";
	}
}

class SkillsEditor extends BaseEditor {
	public route() {
		return "/api/skills";
	}
}

class StatesEditor extends BaseEditor {
	public route() {
		return "/api/states";
	}
}

class SystemEditor extends BaseEditor {
	public route() {
		return "/api/system";
	}
}

class TermsEditor extends BaseEditor {
	public route() {
		return "/api/terms";
	}
}

class TilesetsEditor extends BaseEditor {
	public route() {
		return "/api/tilesets";
	}
}

class TroopsEditor extends BaseEditor {
	public route() {
		return "/api/troops";
	}
}

class WeaponsEditor extends BaseEditor {
	public route() {
		return "/api/weapons";
	}
}

class DatabaseEditor {
	public animations = new AnimationsEditor();
	public actors = new ActorsEditor();
	public armors = new ArmorsEditor();
	public classes = new ClassesEditor();
	public common_events = new CommonEventsEditor();
	public enemies = new EnemiesEditor();
	public items = new ItemsEditor();
	public skills = new SkillsEditor();
	public states = new StatesEditor();
	public system = new SystemEditor();
	public terms = new TermsEditor();
	public tilesets = new TilesetsEditor();
	public troops = new TroopsEditor();
	public weapons = new WeaponsEditor();
	public editors: Array<BaseEditor>;

	constructor() {
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

	public update_data() {
		return this.editors.map(function(editor: BaseEditor) {
			editor.update_data();
		});
	}

	public refresh_data(cb) {
		var done, len;
		len = this.editors.length;
		done = () => {
			len -= 1;
			if (cb ? len <= 0 : void 0) {
				return cb();
			}
		};

		console.log("Refreshing Data");
		return this.editors.map((editor) => editor.refresh_data(false, done));
	}
}

export default new DatabaseEditor;
