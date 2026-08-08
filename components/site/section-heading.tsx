import { Reveal } from "./reveal"

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}
