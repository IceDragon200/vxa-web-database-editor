import Feature from "rpg/base_item/feature";
import EquipItem from "rpg/equip_item";

export default class Armor extends EquipItem {
	public atype_id: number = 0;
    public etype_id: number = 1;

	constructor() {
		super();
		this.features.push(new Feature(22, 1, 0));
	}
}
