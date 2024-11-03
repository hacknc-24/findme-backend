import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getData(): {
        id: number;
        name: string;
        description: string;
    };
}
