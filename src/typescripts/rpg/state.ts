import BaseItem from "rpg/base_item";

export default class State extends BaseItem {
	public restriction = 0;
    public priority = 50;
    public remove_at_battle_end = false;
    public remove_by_restriction = false;
    public auto_removal_timing = 0;
    public min_turns = 1;
    public max_turns = 1;
    public remove_by_damage = false;
    public chance_by_damage = 100;
    public remove_by_walking = false;
    public steps_to_remove = 100;
    public message1 = "";
    public message2 = "";
    public message3 = "";
    public message4 = "";
}
