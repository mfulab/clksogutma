"use client"

import { motion } from "framer-motion"
import {
  Flame,
  Home,
  Wind,
  AirVent,
  Snowflake,
  Wrench,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { CATEGORIES } from "./data"

const ICONS: Record<string, LucideIcon> = {
  flame: Flame,
  home: Home,
  wind: Wind,
  "air-vent": AirVent,
  snowflake: Snowflake,
  wrench: Wrench,
}

export function Categories() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kategoriler"
          title="Dört mevsim konfor için komple çözümler"
          description="Yazın serinleten klima sistemleri, kışın ısıtan soba ve şömineler; hepsi tek çatı altında."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon] ?? Flame
            const cool = cat.climate === "cooling"
            return (
              <motion.a
                key={cat.title}
                href="#featured"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  cool ? "hover:border-cool/50" : "hover:border-warm/50"
                }`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    cool
                      ? "bg-cool/10 text-cool group-hover:bg-cool group-hover:text-cool-foreground"
                      : "bg-warm/10 text-warm group-hover:bg-warm group-hover:text-warm-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span
                  className={`mt-6 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                    cool ? "bg-cool/10 text-cool" : "bg-warm/10 text-warm"
                  }`}
                >
                  {cool ? "Soğutma" : "Isıtma"}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                <span
                  className={`mt-5 inline-flex items-center gap-1 text-sm font-medium ${
                    cool ? "text-cool" : "text-warm"
                  }`}
                >
                  Ürünleri gör
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
