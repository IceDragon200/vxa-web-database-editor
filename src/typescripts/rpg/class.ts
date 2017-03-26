import BaseItem from "rpg/base_item";
import Feature from "rpg/base_item/feature";
import Learning from "rpg/class/learning";
import Table from "core/table";

export default class Class extends BaseItem {
	public exp_params: Array<number>;
	public params: Table;
	public learnings: Array<Learning>;

	constructor() {
		super();
		this.exp_params = [30, 20, 30, 30];
		this.params = new Table(8, 100);

		for (var i = 0; i < 100; ++i) {
			this.params.set(0, i, 400 + i * 50);
			this.params.set(1, i, 80 + i * 10);
		}

		for (var j = 2; j < 6; ++j) {
			this.params.set(j, i, 15 + i * 5 / 4);
		}

		for (var j = 6; j < 8; ++j) {
			this.params.set(j, i, 30 + i * 5 / 2);
		}

		this.learnings = [];

		this.features.push(new Feature(23, 0, 1));
		this.features.push(new Feature(22, 0, 0.95));
		this.features.push(new Feature(22, 1, 0.05));
		this.features.push(new Feature(22, 2, 0.04));
		this.features.push(new Feature(41, 1));
		this.features.push(new Feature(51, 1));
		this.features.push(new Feature(52, 1));
	}
}
