"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatCircleDots } from "@phosphor-icons/react";
import { ChatWindow } from "./chat-window";

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(false);

  useEffect(() => {
    // Initial pulse after 3 seconds
    const initialTimeout = setTimeout(() => setShouldPulse(true), 3000);
    
    // Then pulse every 10 seconds
    const interval = setInterval(() => {
      setShouldPulse(true);
      setTimeout(() => setShouldPulse(false), 1000);
    }, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShouldPulse(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        onClick={handleOpen}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-[#D1834B] text-white shadow-lg hover:shadow-xl hover:bg-[#C2783F] transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat öffnen"
      >
        <ChatCircleDots
          weight="fill"
          size={26}
          className="group-hover:scale-110 transition-transform"
        />
        
        {/* Pulse Ring Animation */}
        <AnimatePresence>
          {shouldPulse && !isOpen && (
            <>
              <motion.span
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-[#D1834B]"
              />
              <motion.span
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: 1.8, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="absolute inset-0 rounded-full bg-[#D1834B]"
              />
            </>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window Modal */}
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}