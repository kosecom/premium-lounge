"use client";

import { motion } from "framer-motion";

interface ChatCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick: () => void;
}

export function ChatCard({ icon, title, description, onClick }: ChatCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full p-4 bg-white rounded-xl border border-border hover:shadow-lg hover:border-[var(--golden-chestnut)]/30 transition-all duration-200 flex items-center gap-4 text-left group"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--golden-chestnut)]/10 flex items-center justify-center text-[var(--golden-chestnut)] group-hover:bg-[var(--golden-chestnut)] group-hover:text-white transition-all duration-200">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground group-hover:text-[var(--golden-chestnut)] transition-colors">
          {title}
        </p>
        {description && (
          <p className="text-sm text-muted-foreground truncate">
            {description}
          </p>
        )}
      </div>
    </motion.button>
  );
}