export default class Effect {
	public code: number;
	public data_id: number;
	public value1: number;
	public value2: number;

	constructor(code: number = 0, data_id: number = 0, value1: number = 0, value2: number = 0) {
		this.code = code;
		this.data_id = data_id;
		this.value1 = value1;
		this.value2 = value2;
	}
}
