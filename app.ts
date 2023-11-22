import express, { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { ChatController } from './controllers'
export class App {

    private _port: number = 80;
    private _server: any;

    constructor() {}

    public Init() {
        this._server = express();
        this._server.listen(this._port);
        this.setupFiles();
        this.setupRoute("/api/chat", new ChatController());
    }
    
    private setupFiles() {
        this._server.get('/', (req: Request, res: Response) => {
            res.sendFile(__dirname + "/web/home.html");
        });

        this._server.get('/main.js', (req: Request, res: Response) => {
            res.sendFile(__dirname + "/web/main.js");
        });
    }

    private setupRoute(path: string, handler: BaseController) { 

        this._server.get(path, async (req: Request, res: Response) => {
            await handler.process(req, res);
        });
    }
}