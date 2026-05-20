import axios from "axios";

// Common Tagalog/Filipino words and particles used to detect the language
const TAGALOG_INDICATORS = [
  // Pronouns
  "ako", "ikaw", "siya", "kami", "tayo", "kayo", "sila",
  // Question words
  "ano", "sino", "saan", "bakit", "paano", "kailan", "ilan",
  // Common words
  "po", "ho", "nga", "naman", "yung", "yun", "ito", "iyan",
  "dito", "doon", "meron", "wala", "hindi", "oo", "opo",
  "salamat", "kumusta", "kamusta", "magkano", "libre",
  "pwede", "puwede", "gusto", "kailangan", "mahal", "mura",
  "saan", "nasaan", "para", "lang", "ba", "na", "ay",
  "mga", "ang", "ng", "sa", "si", "ni", "kay",
  "patulong", "tulungan", "tanong", "sagot", "kaya",
  "piso", "pera", "bayad", "load", "prepaid", "internet",
  "walang", "anuman", "maraming", "kahit", "basta",
];

export function detectFilipino(text: string): boolean {
  const lower = text.toLowerCase();
  // Split into words and check how many are Tagalog indicators
  const words = lower.split(/\s+/);
  const matchCount = words.filter((word) =>
    TAGALOG_INDICATORS.includes(word.replace(/[^a-z]/g, ""))
  ).length;
  // If at least 1 word matches AND the overall word ratio is notable, treat as Filipino
  return matchCount >= 1 && matchCount / words.length >= 0.08;
}

export async function askGroq(message: string) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    console.error("Missing VITE_GROQ_API_KEY in .env");
    return "Configuration error: API key not found.";
  }

  const isFilipino = detectFilipino(message);

  const systemPrompt = isFilipino
    ? "Ikaw si DigiBridge AI, isang matulunging assistant para sa digital inclusion sa Pilipinas. Lagi kang sumasagot sa Filipino/Tagalog kapag ang user ay nagsalita sa Filipino o Tagalog. Maging malinaw, magalang, at madaling intindihin ang iyong mga sagot."
    : "You are DigiBridge AI, a helpful assistant for digital inclusion in the Philippines.";

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant", // ✅ replaces deprecated llama3-8b-8192
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 1800,
        temperature: 0.5,
        top_p: 1,
        stream: false,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error: any) {
    console.error("Groq Full Error:", error.response?.data || error.message);
    return "Groq AI is unavailable.";
  }
}