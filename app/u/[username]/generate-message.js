"use server"
import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

export async function GenerateMessage(){
    const prompt = "Generate a short, funny, and friendly anonymous message (under 15 words) that I can send to a friend. Return ONLY the text.";
    const gemini = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    try{
        const response = await gemini.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
        });
        return response.text;
        console.log(response.text);
        console.log("Success with Gemini");
    } catch(geminiError){
        try{
            const response = await client.responses.create({
                model: "gpt-5-nano",
                input: prompt
            });
            return response.output_text;
            console.log(response.output_text);
            console.log("Success with OpenAI");
        } catch (openaiError) {
            // Final Fallback: Hardcoded message
            console.error("OpenAI error:", openaiError);
            return "You're awesome!";
        }
    
    }
}