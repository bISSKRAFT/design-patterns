import { Forest } from "./tree.ts";

const myForest = new Forest();
myForest.plantTree(1, 1, "name", "blue", "rough");
myForest.plantTree(1, 3, "name", "blue", "rough");
// Because Flyweight can be reused, constructor should only be called once!
// --> Therefore only 3 Objects in memory two trees and one TeeType (flyweight)
