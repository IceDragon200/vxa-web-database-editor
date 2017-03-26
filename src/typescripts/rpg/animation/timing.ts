import SE from "rpg/se";
import Color from "core/color";

export default class Timing {
    public frame: number = 0;
	public se = new SE('', 80);
	public flash_scope: number = 0;
	public flash_color = new Color(255, 255, 255, 255);
	public flash_duration: number = 5;
}
