import { Shape, Rectangle, Circle } from "./shape.ts";

const rectangle = new Rectangle();
rectangle.x = 0;
rectangle.y = 0;
rectangle.color = "orange";
rectangle.width = 30;
rectangle.height = 30;

const circle = new Circle();
circle.x = 1;
circle.y = 1;
circle.color = "white";
circle.radius = 20;

// cloning the objects _without_ knowing its type
const rectangle_clone = rectangle.clone();
console.log(rectangle_clone);
const circle_clone = circle.clone();
console.log(circle_clone);
