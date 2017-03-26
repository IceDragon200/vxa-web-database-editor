export default class Feature {
	public code: number;
	public data_id: number;
	public value: number;

	constructor(code = 0, data_id = 0, value = 0) {
	    this.code = code;
		this.data_id = data_id;
		this.value = value;
	}
}
