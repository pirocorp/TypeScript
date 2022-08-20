import { Box } from "./Box";

let box = new Box<Number>();

box.add(1);
box.add(2);
box.add(3);

console.log(box.count);

let box2 = new Box<String>();

box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
const element = box2.remove();
console.log(element);
console.log(box2.count);


