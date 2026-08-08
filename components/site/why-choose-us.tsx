"use client"

import { motion } from "framer-motion"
import {
  HardHat,
  BadgeCheck,
  ShieldCheck,
  Leaf,
  Truck,
  Headphones,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { FEATURES } from "./data"

const ICONS: Record<string, LucideIcon> = {
  "hard-hat": HardHat,
  "badge-check": BadgeCheck,
  "shield-check": ShieldCheck,
  leaf: Leaf,
  truck: Truck,
  headphones: Headphones,
}

export function WhyChooseUs() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Neden Biz"
          title="İklimlendirmede güvenilir çözüm ortağınız"
          description="Klima ve soba seçiminden montaja, gaz dolumundan satış sonrası desteğe kadar her adımda yanınızdayız."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon] ?? BadgeCheck
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
