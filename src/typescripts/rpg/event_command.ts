export default class EventCommand {
	public code: number;
	public indent: number;
	public parameters;

	constructor(code = 0, indent = 0, parameters = []) {
	    this.code = code;
		this.indent = indent;
		this.parameters = parameters;
	}
}
