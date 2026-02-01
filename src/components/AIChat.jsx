import { useState } from "react";

const AIChat = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm Vidhya, your AI guide to skill development! I can instantly find training programs, assessments, and career opportunities just for you. What adventure shall we begin?",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: message },
      {
        from: "bot",
        text: "Sorry, no agent is available right now. We’ll get back to you once someone is available.",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="fixed bottom-20 right-6 w-96 h-[540px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">

      <div className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/038/130/530/small/icon-for-customer-service-vector.jpg"
            className="w-9 h-9 rounded-full"
            alt="Vidhya"
          />
          <h3 className="font-semibold">Ask Vidhya</h3>
        </div>
        <button onClick={onClose} className="text-xl font-bold">✕</button>
      </div>

      <div className="flex-1 px-4 py-3 space-y-4 overflow-y-auto bg-gray-50">

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2 ${
              msg.from === "user" ? "justify-end" : ""
            }`}
          >
            {msg.from === "bot" && (
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/038/130/530/small/icon-for-customer-service-vector.jpg"
                className="w-8 h-8 rounded-full"
                alt="bot"
              />
            )}

            <div
              className={`max-w-[75%] p-3 rounded-lg text-sm leading-relaxed ${
                msg.from === "user"
                  ? "bg-green-600 text-white rounded-br-none"
                  : "bg-white border rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        
      </div>

      <div className="px-4 py-2">
        <p className="text-sm font-semibold text-gray-600 mb-2">Suggestions:</p>

        {[
          "Show me available courses in IT sector",
          "What assessments are available in Vijayawada?",
          "Show me upcoming courses in next 7 days",
        ].map((text, i) => (
          <div
            key={i}
            className="border border-green-600 text-green-700 rounded-lg px-3 py-2 mb-2 text-sm cursor-pointer hover:bg-green-600 hover:text-white transition"
          >
            {text}
          </div>
        ))}
      </div>

      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me about courses, assessments, or training programs..."
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ➜
        </button>
      </div>
    </div>
  );
};

export default AIChat;
