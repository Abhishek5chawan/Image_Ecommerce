import { Connection } from "mongoose";

declare global {
    var mongoose: {
        con: Connection | null;
        promise: Promise<Connection> | null;
    }
}

export {} // this is needed to prevent TS from merging this file with other imports