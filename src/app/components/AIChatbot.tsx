import { useState, useEffect } from "react";
import {
  Send,
  Mic,
  Lightbulb,
  Wifi,
  DollarSign,
  BookOpen,
} from "lucide-react";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { askGroq, detectFilipino } from "./../lib/groq";
import { supabase } from "./../lib/supabase";

interface Message {
  id: number;
  type: "user" | "ai";
  content: string;
  suggestions?: string[];
}

export function AIChatbot() {
  const INITIAL_MESSAGE: Message = {
    id: 1,
    type: "ai",
    content:
      "Hello! I'm DigiBridge AI, your digital inclusion assistant. I can help you with internet connectivity, learning resources, affordable data plans, scholarships, and digital services in the Philippines. How can I assist you today?",
    suggestions: [
      "Find cheaper internet plans",
      "Show nearby free Wi-Fi spots",
      "How to apply for a scholarship",
      "Recommend e-learning platforms",
    ],
  };

  const STORAGE_KEY = "digibridge_chat_messages";

  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore parse errors
    }
    return [INITIAL_MESSAGE];
  });

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore storage errors (e.g. quota exceeded)
    }
  }, [messages]);

  

  const [inputValue, setInputValue] = useState("");
  const [lowDataMode, setLowDataMode] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputValue,
    };

    try {
  await supabase.from("chat_messages").insert([
    {
      message: inputValue,
      role: "user",
    },
  ]);
} catch (err) {
  console.error("Supabase user insert error:", err);
}

    const budgetMatch = inputValue.match(/₱?\s?(\d{2,5})/);
    const detectedBudget = budgetMatch
      ? parseInt(budgetMatch[1])
      : null;

    const isFilipino = detectFilipino(inputValue);

    let smartPrompt = `
${
  isFilipino
    ? `LANGUAGE RULE — STRICTLY FOLLOW:
- Ang user ay nagsasalita sa Filipino/Tagalog.
- LAGI kang sumasagot sa Filipino/Tagalog sa buong sagot mo.
- Huwag sumagot sa Ingles kahit ang tanong ay may halong Ingles.
- Gamitin ang magalang na anyo (po/ho) kung angkop.
- Kung may mga teknikal na salita (hal. fiber, prepaid, GCash), pwede itong ipanatili sa Ingles ngunit ipaliwanag sa Filipino.

`
    : ``
}
You are DigiBridge AI, a digital inclusion assistant focused exclusively on helping Filipinos with internet access, connectivity, education, and digital services in the Philippines.

ALLOWED TOPICS — only answer questions related to:
1. Internet plans and subscriptions (prepaid, postpaid, broadband, fiber, mobile data)
2. Internet providers in the Philippines (Globe, Smart, DITO, PLDT, Converge, Sky, etc.)
3. Affordable internet and connectivity (free Wi-Fi spots, subsidized programs, government connectivity initiatives)
4. Digital access and digital inclusion (bridging the digital divide, community internet, e-governance)
5. Online education and e-learning platforms for Filipinos (DepEd resources, TESDA Online, Coursera, Khan Academy, YouTube learning, etc.)
6. Scholarships in the Philippines — how to apply, eligibility, and requirements (CHED, DOST-SEI, SM Foundation, Ayala Foundation, TESDA scholarships, LGU scholarships, private scholarships, etc.)
7. Digital services in the Philippines including:
   • GCash
   • Maya
   • online banking
   • e-wallets
   • paying bills online
   • sending money online
   • mobile banking
   • SIM registration
   • e-government portals
   • telemedicine
   • online job portals
   • digital payment apps

DIGITAL SERVICES RULE:
- Users are allowed to ask for help about GCash, Maya, online payments, online banking, SIM registration, and other digital services in the Philippines.
- Always explain steps clearly and simply.
- Assume the user may be a beginner or first-time internet user.
- Use numbered steps when explaining.
- Avoid technical words unless necessary.
- If possible, provide alternatives like:
    • asking help from a trusted family member
    • visiting a nearby service center
    • going to a barangay digital assistance center


GREETING RULE:
- If the user sends a greeting (e.g. "hi", "hello", "hey", "good morning", "kumusta", "kamusta", etc.), respond warmly and introduce yourself briefly.
- Example response: "Hi there! 👋 I'm DigiBridge AI, your digital inclusion assistant. I can help you with internet plans, providers, scholarships, e-learning, and digital services in the Philippines. What can I help you with today?"

THANK YOU RULE:
- If the user says "thank you", "thanks", "ty", "salamat", "thankyou", or similar appreciation messages, respond warmly and politely.
- Example responses:
  • "You're welcome! 😊 I'm happy to help. If you need assistance with scholarships, internet plans, or digital services, just ask anytime!"
  • "Walang anuman! 😊 Feel free to ask if you need more help with connectivity, education, or digital services."
- Keep the response short, friendly, and supportive.


OFF-TOPIC RULE — STRICTLY FOLLOW:

- FIRST, determine if the user message is related to:
  • internet plans
  • wifi
  • mobile data
  • telecom providers
  • broadband
  • connectivity
  • digital access
  • online learning
  • e-learning
  • scholarships
  • student financial assistance
  • tuition support
  • CHED
  • DOST
  • TESDA
  • educational support
  • digital services in the Philippines

- Scholarship-related questions are ALWAYS VALID.
- Examples of VALID scholarship questions:
  • "can you help me look for a scholarship?"
  • "how do i apply for CHED?"
  • "financial assistance for students"
  • "scholarship for college"
  • "student allowance support"

- If the message is related to ANY allowed topic above, answer normally.
- Thank-you messages are ALWAYS VALID.
- Examples:
  • "thank you"
  • "thanks"
  • "salamat"
  • "thankyou so much"
  • "thanks po"
  • "how do i send money in gcash?"
  • "how do i register my sim?"
  • "how to pay bills using maya?"
  • "i forgot my gcash pin"
  • "how to cash in gcash?"
  • "how to use online banking?"
  
- If the user sends a thank-you message, respond warmly and politely.
- Example response:
  "You're welcome! 😊 I'm happy to help. Feel free to ask again anytime about scholarships, internet plans, or digital services."

- ONLY reject questions that are completely unrelated.

- If unrelated, respond with exactly this message:
  ${
    isFilipino
      ? `"Pasensya na po, ang aking tulong ay limitado lamang sa mga paksa tungkol sa internet plans, providers, libreng connectivity, digital access, edukasyon, scholarships, at digital services sa Pilipinas. Magtanong po kayo tungkol sa mga paksang iyon! 😊"`
      : `"Sorry, I can only help with topics related to internet plans, internet providers, affordable connectivity, digital access, education, scholarships, and digital services in the Philippines. Please ask me something related to those topics! 😊"`
  }

- Never reject scholarship questions.
- Never reject education assistance questions.

RESPONSE RULES for allowed topics:
- Give short and clear answers.
- When answering scholarship questions, ALWAYS explain the application process in a beginner-friendly and step-by-step way.

For every scholarship response, include:

• Scholarship name and provider
• Who can apply
• Requirements needed
• Exact step-by-step application process
• Where the student should physically go if needed
• What documents to prepare
• Tips for first-time applicants
• Deadline/application period if known

ADDITIONAL SCHOLARSHIP PRIORITY RULE:

- For scholarship-related questions, prioritize physical assistance before online methods.

- Always suggest:
   • College registrar office
   • School guidance office
   • DOST office
   • CHED regional office
   • Barangay office
   • Municipal hall
   • LGU scholarship office

- Suggested order for scholarship help:

1. Go to your college registrar or guidance office first.
2. Ask whether there are available scholarships or educational assistance.
3. Request a requirements list and application forms.
4. Prepare documents such as:
   • School ID
   • Certificate of Enrollment
   • Grades/report card
   • Birth certificate
   • Proof of income if required
5. If applying for DOST, go to the nearest DOST office.
6. If applying for CHED, visit the nearest CHED regional office.
7. Websites are optional only and should appear at the end under:
   "Additional online help (optional)"

- Do not respond with only "visit the website".
- Keep explanations beginner-friendly and step-by-step.

- When recommending internet plans, always include for each plan:
    • Provider name (Globe, Smart, DITO, PLDT, Converge, etc.)
    • Exact plan/subscription name (e.g. GoSAKTO 299, GigaSurf50, DITO 199, FiberX 1500)
    • Price in pesos (₱)
    • Data allowance or speed (e.g. 8GB, 25 Mbps, unlimited with FUP)
    • Validity period (e.g. 7 days, 30 days)
- List each plan clearly, one per entry.
- Always use pesos (₱) for prices.
- If a budget is mentioned, only recommend plans at or below that budget.

User Question:
${inputValue}
`;

    if (detectedBudget) {
      smartPrompt += `
Budget: ₱${detectedBudget}
Only recommend plans at or below ₱${detectedBudget}.
`;
    }

    let reply = await askGroq(smartPrompt);

    try {
  await supabase.from("chat_messages").insert([
    {
      message: reply,
      role: "assistant",
    },
  ]);
} catch (err) {
  console.error("Supabase AI insert error:", err);
}

    const lowerReply = reply.toLowerCase();

    const providerSources: Record<string, { label: string; url: string }> = {
      globe:    { label: "🌐 Globe Telecom →",        url: "https://www.globe.com.ph/plans" },
      smart:    { label: "🌐 Smart Communications →", url: "https://smart.com.ph/prepaid" },
      dito:     { label: "🌐 DITO Telecommunity →",   url: "https://dito.ph/sim-and-plans" },
      pldt:     { label: "🌐 PLDT Home →",            url: "https://pldthome.com/fiber" },
      converge: { label: "🌐 Converge ICT →",         url: "https://www.convergeict.com/fiberx" },
    };

  const matchedSources = Object.entries(providerSources).filter(([key]) =>
    lowerReply.includes(key)
  );

  const isInternetPlanRecommendation =
    lowerReply.includes("internet plan") ||
    lowerReply.includes("data plan") ||
    lowerReply.includes("mobile data") ||
    lowerReply.includes("fiber") ||
    lowerReply.includes("wifi") ||
    lowerReply.includes("mbps") ||
    lowerReply.includes("gb") ||
    lowerReply.includes("unli data") ||
    lowerReply.includes("prepaid") ||
    lowerReply.includes("postpaid");

  if (
    matchedSources.length > 0 &&
    isInternetPlanRecommendation
  ) {
    const sourceCards = matchedSources
      .map(
        ([, { label, url }]) =>
          `<div class="source-card">
            <a href="${url}" target="_blank">
              ${label}
            </a>
          </div>`
      )
      .join("\n");

    reply += `
  <div class="mt-4">
    <p style="font-weight:600; margin-bottom:8px;">
      📚 Sources
    </p>
    ${sourceCards}
  </div>
  `;
  }

  const aiResponse: Message = {
    id: messages.length + 2,
    type: "ai",
    content: reply,
    suggestions: isFilipino
      ? [
          "Magpakita ng mas murang options",
          "Ikumpara ang mga provider",
          "Pinakamura sa ilalim ng ₱500",
          "Pinakamainam para sa mga estudyante",
        ]
      : [
          "Show cheaper options",
          "Compare providers",
          "Best under ₱500",
          "Best for students",
        ],
  };

  setMessages([...messages, userMessage, aiResponse]);
  setInputValue("");
    };

  const handleClearChat = () => {
    const fresh: Message[] = [
      {
        id: 1,
        type: "ai",
        content:
          "Hello! I'm DigiBridge AI, your digital inclusion assistant. I can help you with internet connectivity, learning resources, affordable data plans, scholarships, and digital services in the Philippines. How can I assist you today?",
        suggestions: [
          "Find cheaper internet plans",
          "Show nearby free Wi-Fi spots",
          "How to apply for a scholarship",
          "Recommend e-learning platforms",
        ],
      },
    ];
    setMessages(fresh);
    try {
      localStorage.setItem("digibridge_chat_messages", JSON.stringify(fresh));
    } catch {
      // ignore
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  return (
    <>
      <style>{`
        .source-card {
          border: 1px solid #e5e7eb;
          padding: 10px 12px;
          border-radius: 12px;
          margin-bottom: 8px;
          background: #f9fafb;
          transition: 0.2s ease;
        }

        .source-card:hover {
          background: #eff6ff;
          border-color: #3b82f6;
        }

        .source-card a {
          text-decoration: none;
          color: #111827;
          font-size: 14px;
          font-weight: 500;
          display: block;
        }
      `}</style>

      <div className="h-full flex flex-col bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                DigiBridge AI Assistant
              </h1>
              <p className="text-gray-600 mt-1">
                Ask about connectivity, learning, or services
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={handleClearChat}
                size="sm"
                variant="outline"
                className="text-sm text-gray-600 border-gray-300 hover:bg-red-50 hover:text-red-600 hover:border-red-300"
              >
                Clear Chat
              </Button>
              <Switch
                id="low-data-mode"
                checked={lowDataMode}
                onCheckedChange={setLowDataMode}
              />
              <Label
                htmlFor="low-data-mode"
                className="text-sm font-medium"
              >
                Low Data Mode
              </Label>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-3xl ${
                      message.type === "user"
                        ? "bg-blue-600 text-white rounded-2xl rounded-br-sm"
                        : "bg-white border border-gray-200 rounded-2xl rounded-bl-sm"
                    } p-5 shadow-sm`}
                  >
                    <div
                      className="whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: message.content,
                      }}
                    />

                    {message.suggestions &&
                      message.suggestions.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                          <p className="text-sm font-medium text-gray-600">
                            Suggested questions:
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {message.suggestions.map(
                              (suggestion, idx) => (
                                <button
                                  key={idx}
                                  onClick={() =>
                                    handleSuggestionClick(
                                      suggestion
                                    )
                                  }
                                  className="text-sm px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                                >
                                  {suggestion}
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="bg-white border-t border-gray-200 p-6">
              <div className="flex gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) =>
                    setInputValue(e.target.value)
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSend()
                  }
                  placeholder="Ask about internet, learning, or services..."
                  className="flex-1 h-12"
                />

                <Button
                  onClick={handleSend}
                  size="icon"
                  className="h-12 w-12 bg-blue-600 hover:bg-blue-700"
                >
                  <Mic className="w-5 h-5" />
                </Button>

                <Button
                  onClick={handleSend}
                  size="icon"
                  className="h-12 w-12 bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>

              {lowDataMode && (
                <p className="text-sm text-amber-600 mt-2 flex items-center gap-2">
                  <Wifi className="w-4 h-4" />
                  Low data mode enabled - using simplified
                  responses
                </p>
              )}
            </div>
          </div>

          {/* Suggestions Panel */}
          <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
            <h3 className="font-semibold text-gray-900 mb-4">
              Proactive Suggestions
            </h3>

            <div className="space-y-4">
              <Card className="p-4 border-green-200 bg-green-50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      Free Wi-Fi Nearby
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Barangay Hall - 200m away
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs"
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-blue-200 bg-blue-50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      Cheaper Plan Available
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Save ₱300/month with Globe GoSAKTO
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-purple-200 bg-purple-50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      New Course Available
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Digital Marketing Basics - Free
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs"
                    >
                      Start Learning
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-amber-200 bg-amber-50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      Tip of the Day
                    </h4>
                    <p className="text-xs text-gray-600">
                      Download learning materials during
                      off-peak hours to save data
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}