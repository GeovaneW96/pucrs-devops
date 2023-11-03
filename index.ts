// index.ts
import express, { Request, Response } from 'express';
import { OpenApiService } from './services/openApi';

const app = express();
const port = 80;

app.get('/', async (req: Request, res: Response) => {
  const basePrompt = `Given that today is ${new Date()}, is it a good idead to deploy code to production?`;
  const prompt = `${basePrompt} Return only sarcastic responses`;
  const params = {
    prompt
  }

  const response = await OpenApiService.chatWithGpt(params);

  res.send(`<h3>${basePrompt}</h3><br>${response}`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});