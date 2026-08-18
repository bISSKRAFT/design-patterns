export interface Subscriber {
  update(data: unknown): void;
}

export class LoggingListener implements Subscriber {
  update(data: unknown): void {
    console.log("LoggingListener.update: ", data);
  }
}
