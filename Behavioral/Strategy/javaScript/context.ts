import { Strategy } from "./strategy.ts";

export class Context {
  private strategy?: Strategy;

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): void {
    return this.strategy?.execute(a, b);
  }
}
