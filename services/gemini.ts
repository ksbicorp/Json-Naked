import { GoogleGenAI, GenerateContentRequest } from "@google/genai";
import { ChatMessage } from "../types";

// Helper to format history for the API
const formatHistory = (history: ChatMessage[]) => {
  return history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.text }]
  }));
};

export const sendMessageToGemini = async (
  apiKey: string,
  prompt: string,
  history: ChatMessage[]
) => {
  const ai = new GoogleGenAI({ apiKey });
  
  // Construct the full payload manually first to return it for visualization
  // This mirrors what the SDK does internally for the generateContent call
  const formattedHistory = formatHistory(history);
  const currentMessagePart = { role: 'user', parts: [{ text: prompt }] };
  const contents = [...formattedHistory, currentMessagePart];
  
  const requestPayload = {
    model: 'gemini-3-pro-preview',
    contents: contents,
    config: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 2048,
    }
  };

  try {
    // We use the SDK to send the request
    const response = await ai.models.generateContent(requestPayload);

    return {
      success: true,
      requestPayload,
      responsePayload: response,
      text: response.text,
    };
  } catch (error: any) {
    return {
      success: false,
      requestPayload,
      responsePayload: { error: error.message },
      text: "Hata: Yanıt oluşturulamadı.",
    };
  }
};