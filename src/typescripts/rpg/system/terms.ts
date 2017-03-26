export default class Terms {
	public basic: Array<string>;
	public params: Array<string>;
	public etypes: Array<string>;
	public commands: Array<string>;

	construct() {
		this.basic = [];
		for (var i = 0; i < 8; ++i)
      		this.basic.push('');

		this.params = [];
		for (var i = 0; i < 8; ++i)
      		this.params.push('');

		this.etypes = [];
		for (var i = 0; i < 5; ++i)
      		this.etypes.push('');

		this.commands = [];
		for (var i = 0; i < 23; ++i)
      		this.commands.push('');
	}
}
