import { Request, Response } from "express";
import { BaseController } from "../BaseController";
import { ChatService } from "../services/chatService";

export class ChatController extends BaseController {

    private chatService: ChatService = new ChatService();

    public doProcess(req: Request, res: Response): Promise<string> {
        const prompt = req.query["prompt"].toString();
        return Promise.resolve(this.chatService.chatWithGpt({prompt}));
    }
}