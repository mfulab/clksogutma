"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { FAQS } from "./data"

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SSS"
          title="Sıkça sorulan sorular"
          description="Aklınıza takılanları sizin için derledik. Cevabını bulamadığınız sorular için bize ulaşabilirsiniz."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const open = openIndex === i
            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-card transition-colors ${
                    open ? "border-accent/40" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-sm font-semibold text-foreground sm:text-base">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        open ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
