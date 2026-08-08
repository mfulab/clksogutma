"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { COMPANY, WORKING_HOURS } from "./data"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="İletişim"
          title="Bize ulaşın, teklifinizi hazırlayalım"
          description="Sorularınız ve ücretsiz keşif talepleriniz için bize telefon, WhatsApp veya form aracılığıyla ulaşabilirsiniz."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={COMPANY.phoneHref}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Telefon</p>
                    <p className="mt-0.5 font-semibold text-foreground">{COMPANY.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">E-posta</p>
                    <p className="mt-0.5 break-all text-sm font-semibold text-foreground">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Konum</p>
                  <p className="mt-0.5 font-semibold text-foreground">{COMPANY.name}</p>
                  <a
                    href={COMPANY.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    Haritada aç
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <p className="text-sm font-semibold text-foreground">Çalışma Saatleri</p>
                </div>
                <div className="mt-3 space-y-2">
                  {WORKING_HOURS.map((w) => (
                    <div key={w.day} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{w.day}</span>
                      <span className="font-medium text-foreground">{w.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <iframe
                  src={COMPANY.mapEmbed}
                  title="Çelik Soğutma harita konumu"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">Ücretsiz Teklif Formu</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Bilgilerinizi bırakın, en kısa sürede size dönüş yapalım.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Ad Soyad" htmlFor="name">
                    <input id="name" name="name" required placeholder="Adınız Soyadınız" className={inputClass} />
                  </Field>
                  <Field label="Telefon" htmlFor="phone">
                    <input id="phone" name="phone" required placeholder="05xx xxx xx xx" className={inputClass} />
                  </Field>
                </div>
                <Field label="E-posta" htmlFor="email">
                  <input id="email" name="email" type="email" placeholder="ornek@eposta.com" className={inputClass} />
                </Field>
                <Field label="İlgilendiğiniz ürün / hizmet" htmlFor="product">
                  <select id="product" name="product" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    <option>Split Klima</option>
                    <option>Salon Tipi Klima</option>
                    <option>VRF / Kaset Sistem</option>
                    <option>Klima Bakım / Gaz Dolumu</option>
                    <option>Odun / Pelet Sobası</option>
                    <option>Şömine</option>
                  </select>
                </Field>
                <Field label="Mesajınız" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="İhtiyacınızı kısaca anlatın (alan m², konum vb.)"
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="submit"
                    className="flex-1 gap-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {sent ? (
                      <>
                        <Check className="h-4 w-4" /> Talebiniz alındı
                      </>
                    ) : (
                      <>
                        Teklif Gönder <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="sm:flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full gap-2 rounded-full border-border bg-transparent"
                    >
                      <MessageCircle className="h-4 w-4 text-[#25D366]" />
                      WhatsApp&apos;tan Yaz
                    </Button>
                  </a>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
