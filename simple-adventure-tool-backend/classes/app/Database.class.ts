import {DataSource} from "typeorm";
import {CONNECTION_CONFIGURATION} from "../../database/database-connection.config";

export class DatabaseClass {
    protected dataSource: DataSource;

    constructor() {
        this.dataSource = new DataSource(CONNECTION_CONFIGURATION);
    }

    public initDbConnection = async (): Promise<DataSource> => {
        return new Promise((resolve, reject) => {
            this.dataSource.initialize().then(() => {
                console.log('Connected with database!');
                resolve(this.dataSource);
            }).catch((err) => {
                console.error('[ERROR] Can`t connect with database!', err);
                reject();
            });
        });
    };

    public async closeDbConnection() {
        await this.dataSource.close();
    };
}
