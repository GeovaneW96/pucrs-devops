import { Request, Response } from "express";


export abstract class BaseController {

    public async process(req: Request, res: Response) { 

        try {
            const response = await this.doProcess(req, res);
            res.send(response);
        }catch(error: any) {
            console.log(error);
            res.status(500).send("Ops, something went wrong");
        }
    }

    abstract doProcess(req: Request, res: Response): Promise<any>;
}