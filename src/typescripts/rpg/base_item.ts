import Feature from "rpg/base_item/feature";

export default class BaseItem {
    public id: number = 0;
	public name: string = '';
	public icon_index: number = 0;
	public description: string = '';
	public features: Array<Feature> = [];
	public note: string = '';
}
