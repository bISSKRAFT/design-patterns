import { Facebook } from "./collection.ts";
import { FacebookIterator } from "./iterator.ts";
import { ProfileGraphFactory } from "./node.ts";

export class Application {}

const graphFactory = new ProfileGraphFactory();
const facebook = new Facebook(graphFactory);
const facebookIterator = new FacebookIterator(facebook, "1", "type");

let loop = true;
console.log(facebookIterator.getNext()?.data);
while (loop) {
  if (facebookIterator.hasMore()) {
    console.log("Node has more");
    console.log(facebookIterator.getNext()?.data);
    prompt("continue?");
  } else {
    console.log("No more");
    loop = false;
    // sanity check - this should not work
    facebookIterator.getNext();
  }
}
