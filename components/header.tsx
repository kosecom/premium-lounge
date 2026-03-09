"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { label: "Die Methode", href: "/methode" },
  { 
    label: "Für wen?", 
    href: "#zielgruppen",
    dropdown: [
      { label: "Long COVID & Post-COVID", href: "/long-covid" },
      { label: "Burnout & Erschöpfung", href: "/burnout" },
      { label: "Leistung & Sport", href: "/leistung" },
    ]
  },
  { label: "Über Markus", href: "/ueber-markus" },
  { label: "Erfahrungen", href: "/erfahrungen" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl transition-all duration-500 ${
        isScrolled 
          ? "nav-glass-solid rounded-2xl shadow-lg" 
          : "nav-glass rounded-2xl"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3 md:px-6 md:py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-10 w-10 md:h-11 md:w-11 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Previum® München"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-foreground">
              Previum®
            </span>
            <span className="text-[10px] text-muted-foreground leading-none">
              München
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <div 
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-white/50 transition-all"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              
              {/* Dropdown */}
              <AnimatePresence>
                {item.dropdown && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-56 nav-glass rounded-xl p-1.5 shadow-xl"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/50 rounded-lg transition-all"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA & Contact */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:08932389988"
            className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">089 323 89 988</span>
          </a>
          <Link
            href="/kontakt"
            className="btn-primary text-sm"
          >
            Kostenlose Beratung
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-foreground hover:bg-white/50 rounded-xl transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border/50 bg-white/95 backdrop-blur-lg overflow-hidden lg:hidden rounded-b-2xl"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 pl-4 border-l-2 border-border flex flex-col">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:08932389988"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted rounded-xl"
                >
                  <Phone className="h-4 w-4" />
                  089 323 89 988
                </a>
                <Link
                  href="/kontakt"
                  className="btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kostenlose Beratung sichern
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}