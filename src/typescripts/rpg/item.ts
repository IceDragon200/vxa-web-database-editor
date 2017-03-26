import UsableItem from "rpg/usable_item";

export default class Item extends UsableItem {
	public scope: number = 7;
    public itype_id: number = 1;
    public price: number = 0;
    public consumable: boolean = true;

    constructor() {
		super();
    }
}
