export class Tree {
	x: number;
	y: number;
	type: TreeType;

	constructor(x: number, y: number, type: TreeType) {
		this.x = x;
		this.y = y;
		this.type = type;
	}

	draw(canvas: any): void {
		this.type.draw(canvas, this.x, this.y);
	}
}

export class TreeType {
	// This is the Flyweight - repeating / immutable state
	name: string;
	color: string;
	texture: string;

	constructor(name: string, color: string, texture: string) {
		this.name = name;
		this.color = color;
		this.texture = texture;
		console.log("Flyweight constructor called");
	}

	draw(canvas: any, x: number, y: number): void {
		console.log("flyweight does work");
	}
}

export class Forest {
	trees: Tree[] = [];

	plantTree(
		x: number,
		y: number,
		name: string,
		color: string,
		texture: string,
	) {
		const treeType = TreeFactory.get(name, color, texture);
		const tree = new Tree(x, y, treeType);
		this.trees.push(tree);
	}
}

export class TreeFactory {
	static treeTypes: TreeType[] = [];

	static get(name: string, color: string, texture: string) {
		let tree = this.treeTypes.find((tree) =>
			tree.name == name && tree.color == color &&
			tree.texture == texture
		);
		if (!tree) {
			tree = new TreeType(name, color, texture);
			this.treeTypes.push(tree);
		}
		return tree;
	}
}
