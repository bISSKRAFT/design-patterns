import { Facebook } from "./collection.ts";
import { Node } from "./node.ts";

type Result<T> = { value: T; done: boolean };

export interface ProfileIterator {
  getNext(): any;
  hasMore(): boolean;
}

export class Profile {
  private id: number = 0;
  private email: string;

  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }

  getId(): number {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }
}

export type NodePredicate = (node: Node<Profile>) => boolean;

export class FacebookIterator implements ProfileIterator {
  private facebook: Facebook;
  private profileId: string;
  private type: string;
  private currentGenerator?: Generator<Node<Profile>>;
  private currentNode?: Node<Profile>;
  private cache = new Set<Node<Profile>>();

  constructor(facebook: Facebook, profileId: string, type: string) {
    this.facebook = facebook;
    this.profileId = profileId;
    this.type = type;
    this.init();
  }

  private init(): void {
    if (!this.currentGenerator) {
      this.currentGenerator = this.dfs(
        this.facebook.getProfiles(this.profileId, this.type),
      );
    }
  }

  getNext(): Node<Profile> | undefined {
    if (this.currentNode) this.cache.add(this.currentNode);
    this.currentNode = this.currentGenerator?.next().value;
    return this.currentNode;
  }

  //TODO: understand graphs / trees and then implement
  hasMore(): boolean {
    if (
      this.visited(this.currentNode!) && !this.hasChildren(this.currentNode!) &&
      this.childrenVisited(this.currentNode!)
    ) return false;
    return true;
  }

  *dfs(node: Node<Profile>): Generator<Node<Profile>> {
    yield node;
    if (!node.children) return;
    for (const child of node.children) {
      yield* this.dfs(child);
    }
  }

  private visited: NodePredicate = (node) => this.cache.has(node);
  private hasChildren: NodePredicate = (node) =>
    node?.children !== undefined && node?.children.length > 0;
  private childrenVisited: NodePredicate = (node) =>
    this.currentNode!.children.every((c) => this.visited(c));

  private hasParentChildren: NodePredicate = (node) =>
    node?.parent !== undefined && node.parent.children[1] !== undefined;

  private applyPredicate(predicates: NodePredicate[], node: Node<Profile>) {
    for (const predicate of predicates) {
      console.log(predicate);
      if (predicate(node)) return true;
    }
    return false;
  }
}
