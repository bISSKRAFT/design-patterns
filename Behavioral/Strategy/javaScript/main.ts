import { Context } from "./context.ts";
import {
  ConcreteStrategyAdd,
  ConcreteStrategyMultiply,
  ConcreteStrategySubstract,
} from "./strategy.ts";

const context = new Context();

context.setStrategy(new ConcreteStrategyAdd());
context.executeStrategy(11, 10);

context.setStrategy(new ConcreteStrategySubstract());
context.executeStrategy(10, 11);

context.setStrategy(new ConcreteStrategyMultiply());
context.executeStrategy(10, 100);
