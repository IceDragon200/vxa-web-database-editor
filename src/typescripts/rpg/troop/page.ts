import Troop_Page_Condition from "rpg/troop/page/condition";
import EventCommand from "rpg/event_command";

export default class Page {
	public condition = new Troop_Page_Condition();
    public span = 0;
    public list = [new EventCommand()];
}
