export interface Strategy {
  execute(a: number, b: number): void;
}

export class ConcreteStrategyAdd implements Strategy {
  execute(a: number, b: number): void {
    console.log(`${a}+${b}=${a + b}`);
  }
}

export class ConcreteStrategySubstract implements Strategy {
  execute(a: number, b: number): void {
    console.log(`${a}-${b}=${a - b}`);
  }
}

export class ConcreteStrategyMultiply implements Strategy {
  execute(a: number, b: number): void {
    console.log(`${a}*${b}=${a * b}`);
  }
}
