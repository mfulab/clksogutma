import { Flame, Snowflake } from "lucide-react"

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-primary ${className ?? ""}`}
    >
      <Flame className="h-[18px] w-[18px] -mr-[3px] text-warm" strokeWidth={2.25} />
      <Snowflake className="h-[18px] w-[18px] -ml-[3px] text-cool" strokeWidth={2.25} />
    </span>
  )
}
