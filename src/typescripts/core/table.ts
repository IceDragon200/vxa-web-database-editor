export default class Table {
	public xsize: number;
	public ysize: number;
	public zsize: number;
	public size: number;
	public dimensions: number;
	public data: Array<number>;

	public constructor(xs: number, ys?: number, zs?: number) {
		this.xsize = 1;
		this.ysize = 1;
		this.zsize = 1;
		this.dimensions = 0;

		if (zs == undefined && ys == undefined) {
			this.xsize = xs;
			this.dimensions = 1;
		} else if (zs == undefined) {
			this.xsize = xs;
			this.ysize = ys;
			this.dimensions = 2;
		} else {
			this.xsize = xs;
			this.ysize = ys;
			this.zsize = zs;
			this.dimensions = 3;
		}

		this.size = this.xsize * this.ysize * this.zsize;

		this.data = [];

		this.refresh_data();
	}

	private refresh_data(): Table {
		this.data = [];
		for (var i = 0; i < this.size; ++i) {
			this.data[i] = 0;
		}
		return this;
	}

	public get(x: number, y?: number, z?: number): number {
		if (this.dimensions == 1) {
			if (!(x >= 0 && x < this.xsize)) return 0;
			return this.data[x];
		} else if (this.dimensions == 2) {
			if (!((x >= 0 && x < this.xsize) && (y >= 0 && y < this.ysize))) return 0;
			return this.data[x + y * this.xsize];
		} else {
			if (!((x >= 0 && x < this.xsize) && (y >= 0 && y < this.ysize) && (z >= 0 && z < this.zsize))) return 0;
			return this.data[x + y * this.xsize + z * this.ysize];
		}
	}

	public set(x: number, y: number, z?: number, w?: number) {
		if (this.dimensions == 1) {
			if (!(x >= 0 && x < this.xsize)) return;
			this.data[x] = y;
		} else if (this.dimensions == 2) {
			if (!((x >= 0 && x < this.xsize) && (y >= 0 && y < this.ysize))) return;
			this.data[x + y * this.xsize] = z;
		} else {
			if (!((x >= 0 && x < this.xsize) && (y >= 0 && y < this.ysize) && (z >= 0 && z < this.zsize))) return;
			this.data[x + y * this.xsize + z * this.ysize] = w;
		}
	}
}
