export default class Condition {
	public turn_ending: boolean = false;
    public turn_valid: boolean = false;
    public enemy_valid: boolean = false;
    public actor_valid: boolean = false;
    public switch_valid: boolean = false;
    public turn_a: number = 0;
    public turn_b: number = 0;
    public enemy_index: number = 0;
    public enemy_hp: number = 50;
    public actor_id: number = 1;
    public actor_hp: number = 50;
    public switch_id: number = 1;
}
