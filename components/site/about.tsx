"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Reveal } from "./reveal"

const POINTS = [
  "25 yılı aşkın iklimlendirme deneyimi",
  "Klima ve sobada sertifikalı, garantili ürünler",
  "Uzman montaj, gaz dolumu ve teknik servis",
  "Türkiye geneline hızlı teslimat",
]

const STATS = [
  { value: "25+", label: "Yıllık tecrübe" },
  { value: "1.200+", label: "Tamamlanan montaj" },
  { value: "%98", label: "Müşteri memnuniyeti" },
]

export function About() {
  return (
    <section id="about" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border shadow-xl">
              <Image
                src="/images/about-workshop.png"
                alt="Çelik Soğutma showroom ve ürünleri"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:right-6">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-semibold text-accent sm:text-2xl">{s.value}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
                Hakkımızda
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Dört mevsim konforun arkasındaki güç
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Çelik Soğutma olarak çeyrek asrı aşkın süredir klima, soba ve
                iklimlendirme sistemleri alanında hizmet veriyoruz. Amacımız
                yalnızca ürün satmak değil; mekanınıza yazın serinlik, kışın
                sıcaklık ve uzun yıllar sürecek konfor katmak. Doğru ürünü
                seçmenizden profesyonel montajına, gaz dolumundan periyodik
                bakımına kadar her aşamada yanınızdayız.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {POINTS.map((point, i) => (
                <Reveal key={point} delay={i * 0.08}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{point}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
