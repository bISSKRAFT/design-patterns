import { Subscriber } from "./subscriber.ts";

export class Publisher {
  private subscriber: Map<string, Subscriber[]> = new Map();

  subscribe(eventType: string, listener: Subscriber): void {
    const col = this.subscriber.get(eventType) ?? [];
    col.push(listener);
    this.subscriber.set(eventType, col);
  }

  unsubscribe(eventType: string, listener: Subscriber): void {
    const col = this.subscriber.get(eventType);
    if (!col) return;
    const index = col.findIndex((sub) => sub === listener);
    if (index !== -1) col.splice(index, 1);
  }

  notify(eventType: string, data: unknown) {
    const col = this.subscriber.get(eventType);
    if (!col) return;
    for (const sub of col) {
      sub.update(data);
    }
  }
}

export class Editor {
  private events: Publisher;

  constructor(publisher: Publisher) {
    this.events = publisher;
  }

  openFile(path: string): void {
    this.events.notify("open", path);
  }

  saveFile(): void {
    this.events.notify("save", "fileName");
  }
}
