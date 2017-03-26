import EventCommand from "rpg/event_command";

export default class CommonEvent {
	public id: number = 0;
    public name: string = '';
    public trigger: number = 0;
    public switch_id: number = 1;
    public list: Array<EventCommand> = [new EventCommand()];
}
