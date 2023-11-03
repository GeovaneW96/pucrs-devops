import OpenAI from "openai";

interface IOpenApiParameters {
  prompt: string,
}

const openai = new OpenAI();
export class OpenApiService {
  private static openai;

  public static Init() {
    this.openai = new OpenAI();
  }

  public static async chatWithGpt(params: IOpenApiParameters): Promise<string> {

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: params.prompt }],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content;
  }
}