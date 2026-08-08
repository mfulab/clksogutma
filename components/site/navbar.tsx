"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrandMark } from "./brand-mark"
import { COMPANY, NAV_LINKS } from "./data"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled
            ? "my-2 rounded-2xl border border-border bg-background/80 py-2.5 shadow-sm backdrop-blur-xl"
            : "my-3 py-3"
        }`}
      >
        <a href="#home" aria-label={COMPANY.name}>
          <BrandMark className="h-10 w-10" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-full border-border bg-transparent"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              WhatsApp
            </Button>
          </a>
          <a href="#contact">
            <Button size="sm" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
              Teklif Al
            </Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-1 rounded-2xl border border-border bg-background/95 p-3 shadow-lg backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full gap-2 rounded-xl bg-transparent">
                  <MessageCircle className="h-4 w-4 text-accent" />
                  WhatsApp ile Yaz
                </Button>
              </a>
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90">
                  Teklif Al
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
