import { Profile } from "./iterator.ts";

export class Node<T> {
  constructor(data: T, parent?: Node<T>) {
    this.parent = parent;
    this.data = data;
  }
  parent?: Node<T>;
  data: T;
  children: Node<T>[] = [];

  addChildren(children: Node<T>[]) {
    for (const c of children) c.parent = this;
    this.children.push(...children);
  }
}

export class ProfileGraphFactory {
  createFriends(): Node<Profile> {
    const node = new Node<Profile>(
      new Profile(9999999999, "parent@email.com"),
    );
    const temp = [];
    for (const i of Array.from({ length: 10 }, (_, i) => i)) {
      temp.push(
        new Node<Profile>(
          new Profile(i, `${i}@email.com`),
        ),
      );
    }

    node.addChildren(temp.slice(0, 3));
    node.children.at(1)?.addChildren(temp.slice(3, 5));
    node.children.at(1)?.children.at(1)?.addChildren(temp.slice(5));
    return node;
  }
}
