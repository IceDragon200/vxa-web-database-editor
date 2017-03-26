import Animation_Frame from "rpg/animation/frame";
import Animation_Timing from "rpg/animation/timing";

export default class Animation {
    public id: number = 0;
    public name: string = '';
    public animation1_name: string = '';
    public animation1_hue: number = 0;
    public animation2_name: string = '';
    public animation2_hue: number = 0;
    public position: number = 1;
    public frame_max: number = 1;
    public frames: Array<Animation_Frame> = [new Animation_Frame()];
    public timings: Array<Animation_Timing> = [];
}
