"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Headset, Send, X } from "lucide-react"

type Message = {
  from: "agent" | "user"
  text: string
  time: string
}

function now() {
  return new Date().toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  })
}

const INITIAL: Message[] = [
  {
    from: "agent",
    text: "Merhaba, Çelik Soğutma Müşteri Hizmetleri'ne hoş geldiniz. Size nasıl yardımcı olabilirim?",
    time: now(),
  },
]

const QUICK = ["Klima fiyatı", "Montaj / bakım", "Ürün önerisi"]

const CANNED: Record<string, string> = {
  "Klima fiyatı":
    "Elbette. Hangi klima tipiyle ilgileniyorsunuz (split, salon tipi, VRF)? Size özel fiyat teklifini hemen hazırlayalım.",
  "Montaj / bakım":
    "Klima montajı, gaz dolumu veya soba bakımı için uygun olduğunuz günü belirtin, ekibimizi yönlendireyim.",
  "Ürün önerisi":
    "Serinletmek veya ısıtmak istediğiniz alanın metrekaresini paylaşırsanız size en uygun modeli önerebilirim.",
}

export function SupportChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL)
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, typing, open])

  function pushAgentReply(userText: string) {
    setTyping(true)
    const reply =
      CANNED[userText] ??
      "Talebinizi aldım. En kısa sürede bir müşteri temsilcimiz detaylı bilgi için sizinle iletişime geçecek."
    window.setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: "agent", text: reply, time: now() }])
    }, 1100)
  }

  function send(text: string) {
    const value = text.trim()
    if (!value) return
    setMessages((m) => [...m, { from: "user", text: value, time: now() }])
    setInput("")
    pushAgentReply(value)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 flex h-[30rem] w-[calc(100vw-3rem)] max-w-[23rem] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 bg-primary px-5 py-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Headset className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-primary bg-[#25D366]" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight">Müşteri Desteği</p>
                  <p className="text-xs text-primary-foreground/70">Genellikle birkaç dakikada yanıt verir</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Sohbeti kapat"
                className="rounded-full p-1.5 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-background px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-md bg-accent text-accent-foreground"
                        : "rounded-bl-md border border-border bg-card text-foreground"
                    }`}
                  >
                    <p>{m.text}</p>
                    <span
                      className={`mt-1 block text-[10px] ${
                        m.from === "user" ? "text-accent-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-card px-3.5 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border bg-card px-3 py-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {QUICK.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  send(input)
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Mesajınızı yazın..."
                  className="h-11 flex-1 rounded-full border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
                <button
                  type="submit"
                  aria-label="Gönder"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Müşteri desteğini aç"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2.5 rounded-full bg-primary px-5 text-primary-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105"
          >
            <Headset className="h-5 w-5" />
            <span className="text-sm font-medium">Müşteri Desteği</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
