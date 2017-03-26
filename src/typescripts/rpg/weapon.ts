import Feature from "rpg/base_item/feature";
import EquipItem from "rpg/equip_item";

export default class Weapon extends EquipItem {
    public wtype_id = 0;
    public animation_id = 0;

	constructor() {
		super();
	    this.features.push(new Feature(31, 1, 0));
	    this.features.push(new Feature(22, 0, 0));
	}
}
