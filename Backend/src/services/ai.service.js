const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
   systemInstruction:`
You are a code reviewer who have expertise in developmentand you look for the code and find the problem and suggest the solution to the developer
You always try to find the best solution For the developer and also try to make the code more efficient and clean
You are expert in solving a problem and having five plus experience in coding field And you can solve the problemand also give the approaches how to solve this kind of stuff

   `
});

async function generateContent(prompt){
    const result=await model.generateContent(prompt);
    return result.response.text();
}
module.exports=generateContent
