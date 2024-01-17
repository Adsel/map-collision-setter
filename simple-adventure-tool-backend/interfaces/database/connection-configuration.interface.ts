export interface IConnectionConfiguration {
    type: 'mysql';
    host: string;
    database: string;
    port: number;
    username: string;
    password: string;
    entities: string[];
    logging: boolean;
    synchronize: boolean;
}
