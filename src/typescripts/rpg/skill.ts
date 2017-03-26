import UsableItem from "rpg/usable_item";

export default class Skill extends UsableItem {
    public scope = 1;
    public stype_id = 1;
    public mp_cost = 0;
    public tp_cost = 0;
    public message1 = '';
    public message2 = '';
    public required_wtype_id1 = 0;
    public required_wtype_id2 = 0;

    constructor() {
		super();
	}
}
