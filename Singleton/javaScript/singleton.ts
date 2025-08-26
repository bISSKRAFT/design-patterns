export class Database {
  private static database: Database;

  private constructor() {}

  public static getInstance(): Database {
    if (!this.database) {
      this.database = new Database();
      console.log("creating instance...");
    }
    return this.database;
  }

  public executeQuery(cmd: string): void {
    console.log(`Execute ${cmd}...`);
  }
}
