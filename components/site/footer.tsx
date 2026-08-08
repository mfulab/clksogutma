import { Phone, Mail, MapPin, Camera, Globe, Share2, Play } from "lucide-react"
import { BrandMark } from "./brand-mark"
import { COMPANY, NAV_LINKS } from "./data"

const SOCIALS = [
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: Share2, label: "X", href: "#" },
  { icon: Play, label: "YouTube", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandMark className="h-10 w-10" />
              <span className="text-base font-semibold">{COMPANY.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Klima ve ısıtma sistemlerinde 25 yılı aşkın deneyim. Split klimalar,
              odun/pelet sobaları, şömineler; premium ürünler, profesyonel montaj
              ve kesintisiz teknik destek.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Hızlı Bağlantılar</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">İletişim</h4>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 break-all text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  {COMPANY.name} · Haritada gör
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} {COMPANY.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-primary-foreground/60">
            Klima · Soba · Şömine · İklimlendirme
          </p>
        </div>
      </div>
    </footer>
  )
}
