"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, ArrowRight, Phone, Calendar, CurrencyEur, Info, Heart, Clock, MapPin, ChatCircle } from "@phosphor-icons/react";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  type: "bot" | "user";
  text: string;
}

interface Choice {
  id: string;
  text: string;
  icon?: React.ReactNode;
}

interface ConversationStep {
  id: string;
  message: string;
  choices: Choice[];
  nextStep?: string;
  action?: () => void;
}

export function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<string>("welcome");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Reset conversation when opening
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hallo! 👋 Ich bin hier, um dir zu helfen.");
        setTimeout(() => {
          addBotMessage("Was interessiert dich am meisten?");
        }, 800);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: "bot",
        text
      }]);
    }, 600 + Math.random() * 400);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type: "user",
      text
    }]);
  };

  const handleChoice = (choice: Choice, nextStepId?: string) => {
    addUserMessage(choice.text);
    setConversationHistory(prev => [...prev, choice.id]);
    
    // Handle actions
    if (choice.id === "termin-buchen") {
      setTimeout(() => {
        addBotMessage("Perfekt! Du kannst direkt einen Termin buchen:");
        setTimeout(() => {
          setCurrentStep("termin-flow");
        }, 500);
      }, 500);
      return;
    }
    
    if (choice.id === "calendly-yes") {
      handleCalendly();
      return;
    }
    
    if (choice.id === "kosten-info") {
      setTimeout(() => {
        addBotMessage("Gute Frage! Die Kosten hängen von deinem individuellen Bedarf ab.");
        setTimeout(() => {
          addBotMessage("Ein Kurs umfasst normalerweise 10–15 Einheiten. Im kostenlosen Erstgespräch klären wir alles – auch die Preise, bevor du dich entscheidest.");
          setTimeout(() => {
            setCurrentStep("kosten-flow");
          }, 700);
        }, 600);
      }, 500);
      return;
    }
    
    if (choice.id === "ihht-erfahren") {
      setTimeout(() => {
        addBotMessage("IHHT steht für Intervall-Hypoxie-Hyperoxie-Training.");
        setTimeout(() => {
          addBotMessage("Dabei atmest du im Wechsel weniger und mehr Sauerstoff – das trainiert deine Mitochondrien, die Kraftwerke deiner Zellen.");
          setTimeout(() => {
            addBotMessage("Der Effekt: Mehr Energie, weniger Erschöpfung. Der Mechanismus wurde 2019 mit dem Medizin-Nobelpreis ausgezeichnet.");
            setTimeout(() => {
              setCurrentStep("ihht-flow");
            }, 600);
          }, 700);
        }, 700);
      }, 500);
      return;
    }
    
    if (choice.id === "symptome-info") {
      setTimeout(() => {
        addBotMessage("Wir betreuen Menschen mit:");
        setTimeout(() => {
          addBotMessage("• Long COVID & Post-COVID-Syndrom");
          setTimeout(() => {
            addBotMessage("• Burnout & chronischer Erschöpfung");
            setTimeout(() => {
              addBotMessage("• Leistungsabfall & Regenerationsproblemen");
              setTimeout(() => {
                addBotMessage("• Konzentrationsstörungen & Brain Fog");
                setTimeout(() => {
                  setCurrentStep("symptome-flow");
                }, 500);
              }, 400);
            }, 400);
          }, 400);
        }, 500);
      }, 500);
      return;
    }
    
    if (choice.id === "telefon") {
      handlePhone();
      return;
    }
    
    if (choice.id === "mehr-hilfe") {
      setTimeout(() => {
        addBotMessage("Gerne! Was möchtest du noch wissen?");
        setTimeout(() => {
          setCurrentStep("welcome");
        }, 500);
      }, 300);
      return;
    }
    
    // Default next step
    if (nextStepId) {
      setTimeout(() => {
        setCurrentStep(nextStepId);
      }, 800);
    }
  };

  const handleCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/previum-muenchen'
      });
    } else {
      window.open('https://calendly.com/previum-muenchen', '_blank');
    }
    onClose();
  };

  const handlePhone = () => {
    window.location.href = 'tel:08932389988';
    onClose();
  };

  // Conversation flows
  const steps: Record<string, ConversationStep> = {
    "welcome": {
      id: "welcome",
      message: "",
      choices: [
        { id: "termin-buchen", text: "Termin buchen", icon: <Calendar weight="fill" size={18} /> },
        { id: "kosten-info", text: "Was kostet IHHT?", icon: <CurrencyEur weight="fill" size={18} /> },
        { id: "ihht-erfahren", text: "Was ist IHHT?", icon: <Info weight="fill" size={18} /> },
        { id: "symptome-info", text: "Für wen ist IHHT?", icon: <Heart weight="fill" size={18} /> },
      ]
    },
    "termin-flow": {
      id: "termin-flow",
      message: "",
      choices: [
        { id: "calendly-yes", text: "Jetzt Termin buchen", icon: <Calendar weight="fill" size={18} /> },
        { id: "telefon", text: "Lieber telefonieren", icon: <Phone weight="fill" size={18} /> },
      ]
    },
    "kosten-flow": {
      id: "kosten-flow",
      message: "",
      choices: [
        { id: "termin-buchen", text: "Kostenloses Erstgespräch", icon: <Calendar weight="fill" size={18} /> },
        { id: "mehr-hilfe", text: "Noch eine Frage", icon: <ArrowRight weight="fill" size={18} /> },
      ]
    },
    "ihht-flow": {
      id: "ihht-flow",
      message: "",
      choices: [
        { id: "termin-buchen", text: "Termin vereinbaren", icon: <Calendar weight="fill" size={18} /> },
        { id: "kosten-info", text: "Was kostet es?", icon: <CurrencyEur weight="fill" size={18} /> },
        { id: "mehr-hilfe", text: "Andere Frage", icon: <ArrowRight weight="fill" size={18} /> },
      ]
    },
    "symptome-flow": {
      id: "symptome-flow",
      message: "",
      choices: [
        { id: "termin-buchen", text: "Termin buchen", icon: <Calendar weight="fill" size={18} /> },
        { id: "ihht-erfahren", text: "Wie funktioniert IHHT?", icon: <Info weight="fill" size={18} /> },
        { id: "mehr-hilfe", text: "Andere Frage", icon: <ArrowRight weight="fill" size={18} /> },
      ]
    },
  };

  const currentChoices = steps[currentStep]?.choices || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "min(80vh, 600px)" }}
          >
            {/* Header */}
            <div className="relative p-4 bg-gradient-to-br from-[#D1834B] to-[#B8723E] text-white flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Schließen"
              >
                <X weight="bold" size={18} />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <ChatCircle weight="fill" size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">
                    Previum Chat
                  </h2>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                      message.type === "user"
                        ? "bg-[#D1834B] text-white rounded-br-md"
                        : "bg-white text-foreground rounded-bl-md shadow-sm border border-border"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-border">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Choice Buttons */}
            {!isTyping && currentChoices.length > 0 && (
              <div className="p-4 bg-white border-t border-border flex-shrink-0">
                <div className="space-y-2">
                  {currentChoices.map((choice, index) => (
                    <motion.button
                      key={choice.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleChoice(choice, steps[currentStep]?.nextStep)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border hover:border-[var(--golden-chestnut)] hover:bg-[var(--golden-chestnut)]/5 transition-all duration-200 flex items-center gap-3 text-left group"
                    >
                      {choice.icon && (
                        <span className="text-[var(--golden-chestnut)] group-hover:scale-110 transition-transform">
                          {choice.icon}
                        </span>
                      )}
                      <span className="text-sm font-medium text-foreground group-hover:text-[var(--golden-chestnut)] transition-colors">
                        {choice.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}