import {Player} from "../../entities/player.entity";
import {DatabaseClass} from "./Database.class";

export class APIClass {

    constructor(protected database: DatabaseClass) {
    }

    public async appendRoutes(server: any): Promise<void> {
        server.get('/api/users', async (req: any, res: any) => {
            const dataSource = await this.database.initDbConnection();

            try {
                const user: Player[] = await dataSource.getRepository(Player).find();

                if (!user) {
                    // unauthorizedResponse(res);
                    // return;
                } else {
                    return res.json({
                        user
                    });
                }

                console.log('users', user);
            } catch (e) {
                console.error('err:', e);
            }

            res.json({
                'err': true,
                'message': 'err'
            });
        });

        server.get('/', (req: any, res: any) => {
            res.json({
                name: 'REST API - local',
                version: '1.0.0'
            });
        });
    }
}
