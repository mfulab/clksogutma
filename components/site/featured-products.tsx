"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Snowflake, Flame, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "./section-heading"
import { PRODUCTS, type Climate } from "./data"

type Filter = "all" | Climate

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "cooling", label: "Klima / Soğutma" },
  { value: "heating", label: "Soba / Isıtma" },
]

export function FeaturedProducts() {
  const [filter, setFilter] = useState<Filter>("all")
  const products = PRODUCTS.filter((p) => filter === "all" || p.climate === filter)

  return (
    <section id="featured" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Öne Çıkanlar"
          title="Çok tercih edilen ürünlerimiz"
          description="Yazın serinleten klimalardan kışın ısıtan sobalara, en çok tercih edilen modeller."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.value
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {products.map((product, i) => {
              const cool = product.climate === "cooling"
              const Icon = cool ? Snowflake : Flame
              return (
                <motion.article
                  key={product.name}
                  layout
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur ${
                        cool ? "bg-cool/90 text-cool-foreground" : "bg-warm/90 text-warm-foreground"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {product.capacity}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                      <a href="#contact" className="flex-1">
                        <Button className="w-full gap-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Detayları Gör
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </a>
                      <a href="#contact" className="flex-1">
                        <Button
                          variant="outline"
                          className={`w-full rounded-full border-border bg-transparent ${
                            cool ? "hover:border-cool hover:text-cool" : "hover:border-warm hover:text-warm"
                          }`}
                        >
                          Teklif İste
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
