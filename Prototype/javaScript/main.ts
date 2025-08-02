import { Shape, Rectangle, Circle, ShapeRegistry } from "./shape.ts";

const shapeRegistry = new ShapeRegistry();
const rectangle = new Rectangle();
rectangle.x = 0;
rectangle.y = 0;
rectangle.color = "orange";
rectangle.width = 30;
rectangle.height = 30;
shapeRegistry.additem("organge_rectangle", rectangle);

const circle = new Circle();
circle.x = 1;
circle.y = 1;
circle.color = "white";
circle.radius = 20;
shapeRegistry.additem("white_circle", circle);

// construction of origin objects can be hidden from client
// cloning the objects _without_ knowing its type
const rectangle_clone = rectangle.clone();
console.log(rectangle_clone);
const circle_clone = circle.clone();
console.log(circle_clone);

// client has the ability to use (clone) objects without knowing its type
const shape: Shape | undefined = shapeRegistry.getById("white_circle");
console.log("retrieved from registry: ", shape); // actually a Circle
const shape2: Shape | undefined = shapeRegistry.getByColor("orange");
console.log("retrieved from registry: ", shape2); // actually a Rectangle
