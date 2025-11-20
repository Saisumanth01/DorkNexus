import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are an expert in Google Hacking Database (GHDB) and Google Dorking. 
Your task is to translate natural language user requests into highly specific, safe, and effective Google Search operators (dorks).

Rules:
1. ONLY return the raw search query string. No markdown, no explanations.
2. Use advanced operators like site:, inurl:, intitle:, filetype:, ext:, allintext:, etc.
3. If the user asks for files, prioritize filtering out fake sites (e.g., -inurl:php -inurl:html for open directories).
4. If the user asks for something dangerous or illegal (PII, credit cards, vulnerable databases), return a safe, educational query instead (e.g., related to security research of that topic) or a generic query, but DO NOT refuse completely unless it's heinous.
5. Target "index of" for file discovery if applicable.

Example 1:
User: "Find me open directories with Marvel movies"
Response: intitle:"index.of" (mp4|mkv|avi) "Marvel" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)

Example 2:
User: "PDFs about React hooks hosted on university sites"
Response: filetype:pdf "React hooks" site:.edu

Example 3:
User: "Unsecured security camera web interfaces"
Response: intitle:"webcam 7" inurl:"/gallery.html"
`;

export const generateSmartDork = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "site:google.com Error: API_KEY not found";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            dork: {
              type: Type.STRING,
              description: "The generated google search query"
            },
            explanation: {
              type: Type.STRING,
              description: "Brief explanation of what the dork does"
            }
          }
        }
      },
    });

    const jsonText = response.text;
    if (!jsonText) return "";
    
    const data = JSON.parse(jsonText);
    return data.dork || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback basic search
    return `"${userPrompt}"`;
  }
};
