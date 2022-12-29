import { Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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"
});

const openai = new OpenAIApi(configuration);

const obtenerRespuestaOpenAi = async (req: Request, res: Response) => {
  console.log({ configuration })
  console.log(req.body)
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.2,
      presence_penalty: 0,
      stop: ['"""']
    })

    res.status(200).send({
      bot: response.data.choices[0].text
    })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
};

export { obtenerRespuestaOpenAi }