type Structure = {
  collect(): void;
};

export abstract class GameAi {
  makeTurn(): void {
    this.collectResources();
    this.buildStructures();
    this.buildUnits();
    this.attack();
  }
  collectResources() {
    for (const s of this.buildStructures()) {
      s.collect();
    }
  }
  abstract buildStructures(): Array<Structure>;

  attack() {
    const enemy = this.closestEnemy();
    if (enemy == null) {
      // do something
    } else {
      //do somehting else
    }
  }
  abstract buildUnits(): void;

  closestEnemy(): number | null {
    return 1;
  }
}

export class OrcsAi extends GameAi {
  override buildStructures(): Array<Structure> {
    throw new Error("Method not implemented.");
  }
  override buildUnits(): void {
    throw new Error("Method not implemented.");
  }
}

export class MonsterAi extends GameAi {
  override buildStructures(): Array<Structure> {
    throw new Error("Method not implemented.");
  }
  override buildUnits(): void {
    throw new Error("Method not implemented.");
  }
}
