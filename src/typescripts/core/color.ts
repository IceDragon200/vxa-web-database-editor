export default class Color {
	public red: number;
	public green: number;
	public blue: number;
	public alpha: number;

	constructor(r: number = 255, g: number = 255, b: number = 255, a: number = 255) {
		this.red = r;
		this.green = g;
		this.blue = b;
		this.alpha = a;
	}

	public toString() {
		return `${this.red}, ${this.green}, ${this.blue}, ${this.alpha}`
	}

	public static white(): Color {
		return new Color(255, 255, 255, 255);
	}

	public static default(): Color {
		return this.white();
	}
}
