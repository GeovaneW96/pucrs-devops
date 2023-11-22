import OpenAI from "openai";

export interface IOpenApiParameters {
  prompt: string,
}

export class ChatService {

  private openai;

  constructor() {
    this.openai = new OpenAI();
  }

  public async chatWithGpt(params: IOpenApiParameters): Promise<any> {

    try {

      const completion = await this.openai.chat.completions.create({
        messages: [{ role: "system", content: params.prompt }],
        model: "gpt-3.5-turbo",
      });

      return {
        response: completion.choices[0].message.content
      };
    } catch (error: any) {

      console.log(error);
      throw new Error("Error calling OpenAI API");
    }
  }
}