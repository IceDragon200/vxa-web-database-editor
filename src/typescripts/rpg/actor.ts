import BaseItem from "rpg/base_item";

export default class Actor extends BaseItem {
	public nickname = '';
	public class_id = 1;
	public initial_level = 1;
	public max_level = 99;
	public character_name = '';
	public character_index = 0;
	public face_name = '';
	public face_index = 0;
	public equips: Array<number> = [0, 0, 0, 0, 0];

	constructor() {
		super();
	}
}
