import Troop_Page from "rpg/troop/page";
import Troop_Member from "rpg/troop/member";

export default class Troop {
	public id: number = 0;
    public name: string = '';
    public members: Array<Troop_Member> = [];
    public pages: Array<Troop_Page> = [new Troop_Page];
}
