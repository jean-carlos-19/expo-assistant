const chatGptEndPoint = 'https://api.openai.com/v1/chat/completions';
const dallEndPoint = 'https://api.openai.com/v1/completions';
import { OPEN_AI_KEY } from '@env';
import { ChatGPTAPI } from 'chatgpt';

const ServiceOpenAI = async () => {
 const api = new ChatGPTAPI({ apiKey: OPEN_AI_KEY})
 try {
    const rs = await api.sendMessage('What is OpenAI?')
    console.log("data: ",rs.detail)
 } catch (error) {
  console.log(error);
 }
};
export {ServiceOpenAI}