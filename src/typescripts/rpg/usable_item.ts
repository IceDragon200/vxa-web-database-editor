import Damage from "rpg/usable_item/damage";
import Effect from "rpg/usable_item/effect";
import BaseItem from "rpg/base_item";

export default class UsableItem extends BaseItem {
	public scope = 0;
    public occasion = 0;
    public speed = 0;
    public success_rate = 100;
    public repeats = 1;
    public tp_gain = 0;
    public hit_type = 0;
    public animation_id = 0;
    public damage = new Damage();
    public effects: Array<Effect> = [];
}
