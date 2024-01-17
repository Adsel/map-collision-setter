import * as bodyParser from "body-parser";
import {APIClass} from "./API.class";
import {DatabaseClass} from "./Database.class";
import {Hosts} from "../../enums/app/hosts.enum";

const cors = require('cors');
const express: any = require('express');


export class ServerClass {
    protected port: number;
    protected server: any;
    protected database: DatabaseClass;

    constructor() {
        this.port = +(process.env.SERVER_PORT ?? '');
        this.server = express();
        this.database = new DatabaseClass();
    }

    public async start(): Promise<void> {
        this.appendModules();
        this.runServer();
        await (new APIClass(this.database)).appendRoutes(this.server);
    }

    protected appendModules(): void {
        this.server.use(bodyParser.json());
        this.server.use(express.json());
        this.server.use(cors({
            origin: '*'
        }));
    }

    protected runServer(): void {
        this.server.listen(this.port, Hosts.Local, (error: any): any => {
            if (!error) {
                console.log("Server is Successfully Running, and App is listening on port " + this.port);
            } else {
                console.log("Error occurred, server can't start", error);
            }
        });
    }
}
