import { MessageCircle, Send, X } from "lucide-react";
import React, { useState } from "react";

const ChatBot2 = ({
  messages,
  setMessages,

  chatEndRef,
}) => {
  const [chatOpen, setChatOpen] = useState(false);

  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes("project") || message.includes("work")) {
      return "I've worked on several exciting projects! My portfolio includes an E-Commerce Platform with payment integration, an AI Task Manager using OpenAI, and a Social Media Analytics dashboard. Each project showcases my full-stack capabilities. Would you like to know more about any specific project?";
    }

    if (message.includes("skill") || message.includes("technology")) {
      return "I'm proficient in React, Next.js, Node.js, Java, Spring Boot, MySQL, MongoDB, JavaScript, HTML/CSS, Redux and AI integration with OpenAI and Gemini APIs. I also have experience with Tailwind CSS, TypeScript, Docker, and AWS. I'm always learning and expanding my tech stack!";
    }

    if (message.includes("experience") || message.includes("background")) {
      return "I'm a passionate full-stack developer with expertise in building modern web applications. I love combining beautiful UI/UX with robust backend systems and intelligent AI features. I've completed multiple projects ranging from e-commerce platforms to AI-powered tools.";
    }

    if (message.includes("hire") || message.includes("why")) {
      return "I bring a unique blend of technical expertise, creativity, and problem-solving skills. I'm passionate about clean code, user experience, and building products that make a real impact. I'm a quick learner, great team player, and always excited to tackle new challenges!";
    }

    if (message.includes("contact") || message.includes("reach")) {
      return "You can reach me at sunnydhanwant4240@gmail.com or call me at +91-9718594240. I'm also active on LinkedIn and GitHub. Feel free to connect with me through any of these channels!";
    }

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hey there! 👋 I'm excited to chat with you! Ask me anything about my projects, skills, experience, or why you should hire me. How can I help you today?";
    }

    return "That's a great question! I'm here to tell you about my projects, technical skills, experience, and what makes me a great candidate. Feel free to ask me anything specific, or check out the different sections of my portfolio!";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time------------
    setTimeout(() => {
      const aiResponse = {
        text: getAIResponse(inputMessage),
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };
  return (
    <>
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition transform z-50"
        >
          <MessageCircle size={28} className="text-white" />
        </button>
      )}
      {chatOpen && (
        <div className="fixed bottom-6 left-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                AI
              </div>
              <div>
                <h3 className="font-semibold text-white">Chat with AI Me</h3>
                <p className="text-xs text-blue-100">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
                <p className="mb-4">👋 Hi! I'm your AI assistant.</p>
                <p className="text-sm">
                  Ask me about projects, skills, or experience!
                </p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl px-4 py-2 rounded-bl-none">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot2;
