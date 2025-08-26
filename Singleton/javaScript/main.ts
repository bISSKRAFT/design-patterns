import { Database } from "./singleton.ts";

const database = Database.getInstance();
const database2 = Database.getInstance();

database.executeQuery("SELECT");
database2.executeQuery("DELETE");
