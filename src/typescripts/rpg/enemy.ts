import Feature from "rpg/base_item/feature";
import DropItem from "rpg/enemy/drop_item";
import Action from "rpg/enemy/action";
import BaseItem from "rpg/base_item";

export default class Enemy extends BaseItem {
	public battler_name = '';
    public battler_hue = 0;
    public params: Array<number>;
    public exp = 0;
    public gold = 0;
    public drop_items: Array<DropItem>;
    public actions: Array<Action>;

    constructor() {
		super();
		this.drop_items = [
			new DropItem(),
			new DropItem(),
			new DropItem(),
		];
		this.params = [100, 0, 10, 10, 10, 10, 10, 10];
		this.actions = [new Action()];
	    this.features.push(new Feature(22, 0, 0.95));
	    this.features.push(new Feature(22, 1, 0.05));
	    this.features.push(new Feature(31, 1, 0));
    }
}
