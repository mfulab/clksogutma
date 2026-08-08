"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Snowflake, Flame, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 55% at 12% 20%, color-mix(in oklab, var(--warm) 16%, transparent), transparent), radial-gradient(55% 55% at 92% 12%, color-mix(in oklab, var(--cool) 18%, transparent), transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Snowflake className="h-3.5 w-3.5 text-cool" />
              <span className="h-3 w-px bg-border" />
              <Flame className="h-3.5 w-3.5 text-warm" />
              Yazın serin, kışın sıcak · 25 yıllık tecrübe
            </span>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Evinizde dört mevsim{" "}
              <span className="text-cool">serinlik</span> ve{" "}
              <span className="text-warm">sıcaklık</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Inverter klimalardan VRF sistemlerine, odun sobalarından şöminelere
              kadar iklimlendirme çözümlerini profesyonel montaj, gaz dolumu ve
              garanti güvencesiyle sunuyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#products">
                <Button
                  size="lg"
                  className="w-full gap-2 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 sm:w-auto"
                >
                  Ürünleri İncele
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-border bg-transparent px-6 sm:w-auto"
                >
                  Ücretsiz Keşif & Teklif
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-warm text-warm" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">1.200+</span> mutlu müşteri
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-2xl sm:aspect-[5/5]">
              <Image
                src="/images/hero-climate.png"
                alt="Modern oturma odasında klima ve odun sobası bir arada"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-5 left-4 w-[16rem] rounded-2xl border border-border bg-card/90 p-4 shadow-xl backdrop-blur-md sm:left-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cool/10 text-cool">
                  <Snowflake className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Inverter Split Klima</p>
                  <p className="text-xs text-muted-foreground">Soğutma · 12.000 BTU</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">Enerji sınıfı</span>
                <span className="text-sm font-semibold text-cool">A++</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="absolute -top-4 right-3 hidden w-[13rem] rounded-2xl border border-border bg-card/90 p-3.5 shadow-xl backdrop-blur-md sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm/10 text-warm">
                  <Flame className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Odun Sobası</p>
                  <p className="text-xs text-muted-foreground">Isıtma · %82 verim</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
