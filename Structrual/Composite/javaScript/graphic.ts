export interface Graphic {
	move(x: number, y: number): void;
	draw(): void;
}

export class Dot implements Graphic {
	protected x: number;
	protected y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	move(x: number, y: number): void {
		console.log(`Dot: moved from ${this.x}, ${this.y}, to ${this.x + x}, ${this.y + y}`);
		this.x += x;
		this.y += y;
	}

	draw(): void {
		console.log(`called draw on Dot`);
	}
}


export class CompoundGraphic implements Graphic {
	private children: Graphic[] = [];

	move(x: number, y: number): void {
		for (const child of this.children) {
			child.move(x, y);
		}
	}

	draw(): void {
		for (const child of this.children) {
			child.draw();
		}
	}

	add(child: Graphic): void {
		this.children.push(child);
	}

	remove(child: Graphic): void {
		this.children.filter(c => c !== child);
	}
}

export class Circle extends Dot {
	private radius: number;

	constructor(x: number, y: number, radius: number) {
		super(x, y);
		this.radius = radius;
	}

	draw(): void {
		console.log(`draw Circle, x: ${this.x}, y: ${this.y}, radius: ${this.radius}`);
	}
}
