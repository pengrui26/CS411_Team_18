import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const description = req.body.description || '';
  if (description.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid description",
      }
    });
    return;
  }
  const numWords = req.body.numWords;
  const maxNumSyllables = req.body.maxNumSyllables;
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(description,numWords,maxNumSyllables),
      temperature: 0.6,
      max_tokens:300,
    });
    const input=completion.data.choices[0].text;
    sendOutput(input);
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}
function sendOutput(input){
}

function generatePrompt(description="",numWords,maxNumSyllables=2) {
  //const capitalizedAnimal =
 //   animal[0].toUpperCase() + animal.slice(1).toLowerCase();
 //const prompt ='suggest a few names of restaurants which fulfill these requirements: find ${numRestaurants} different restaurants, restaurants type are ${restaurantsType},the specific detail is : ${description}. separate names with commas.'
 //const prompt = `suggest a few real restaurants which fulfill these requirements: find number of ${numWords} different restaurants, restaurants type are :if this is 1: ${maxNumSyllables} then the restaurant type is Chinese food, or if 
 //${maxNumSyllables} is 2, then give me an English restaurant,the specific detail is : ${description}. separate names with commas.`
 if (numWords===1){
  const prompt=`I want to summarize the text here: ${description}`
 console.log(prompt);
    return prompt;// return `Suggest two names for an animal that is a superhero.
 }
 else if (numWords===3){
  const prompt=`Please improve this text: ${description}`
  console.log(prompt);
    return prompt;// return `Suggest two names for an animal that is a superhero.
 }
 else {
  const prompt=`Please answer this question: ${description}`
  console.log(prompt);
    return prompt;// return `Suggest two names for an animal that is a superhero.
 }
 


}