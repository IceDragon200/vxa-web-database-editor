import BaseItem from "rpg/base_item";

export default class EquipItem extends BaseItem {
	public price: number = 0;
    public etype_id: number = 0;
    public params: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0];

    constructor() {
		super();
    }
}
