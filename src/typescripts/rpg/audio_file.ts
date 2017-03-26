export default class AudioFile {
	public name: string;
	public volume: number;
	public pitch: number;

	constructor(name = "", volume = 100, pitch = 100) {
    	this.name = name;
		this.volume = volume;
		this.pitch = pitch;
	}
}
