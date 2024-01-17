import {IConnectionConfiguration} from "../interfaces/database/connection-configuration.interface";

export const CONNECTION_CONFIGURATION: IConnectionConfiguration = {
    type: 'mysql',
    host: process.env.SERVER_DB_HOST ?? '',
    port: 3306,
    username: process.env.SERVER_DB_USER ?? '',
    password: process.env.SERVER_DB_PASSWORD ?? '',
    database: process.env.SERVER_DB_DATABASE ?? '',
    entities: ['./**/*entity.{js,ts}'],
    logging: true,
    synchronize: true,
};
