export default class Tone {
	public red: number;
	public green: number;
	public blue: number;
	public gray: number;

	constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 0) {
		this.red = r;
		this.green = g;
		this.blue = b;
		this.gray = a;
	}

	public toString() {
		return `${this.red}, ${this.green}, ${this.blue}, ${this.gray}`
	}

	public static default(): Tone {
		return new Tone(0, 0, 0, 0);
	}
}
