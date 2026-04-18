import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, SparklesIcon, X } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"
import { useState } from "react"

const ART_URL = "https://cdn.poehali.dev/projects/b66cf1db-5a26-4ec9-8c56-b595bce2eea0/bucket/02198c81-d642-4e7e-b2fb-c3d74c878c2f.jpg"

function ArtModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 rounded-full bg-pink-300 p-1 text-pink-950 hover:bg-pink-200"
        >
          <X className="h-4 w-4" />
        </button>
        <img
          src={ART_URL}
          alt="Арт Десскич"
          className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
        />
      </div>
    </div>
  )
}

type PricingCardProps = {
  titleBadge: string
  priceLabel: string
  priceSuffix?: string
  features: string[]
  cta?: string
  className?: string
  showArt?: boolean
}

function PricingCard({
  titleBadge,
  priceLabel,
  priceSuffix = "/мес",
  features,
  cta = "Подписаться",
  className,
  showArt = false,
}: PricingCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <ArtModal onClose={() => setOpen(false)} />}
      <div
        className={cn(
          "bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2",
          "backdrop-blur-sm",
          className,
        )}
      >
        <DotPattern width={5} height={5} />
        <div className="flex items-center gap-3 p-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
            {titleBadge}
          </Badge>
          <div className="ml-auto">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/5 text-white border-white/20 hover:bg-white/10 font-open-sans-custom text-xs"
              onClick={showArt ? () => setOpen(true) : undefined}
            >
              {cta}
            </Button>
          </div>
        </div>

        <div className="flex items-end gap-2 px-3 py-1">
          <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
            {priceLabel}
          </span>
          {priceLabel.toLowerCase() !== "бесплатно" && priceLabel !== "0 ₽" && (
            <span className="text-gray-300 text-xs font-open-sans-custom">{priceSuffix}</span>
          )}
        </div>

        <ul className="text-gray-300 grid gap-2 p-3 text-xs font-open-sans-custom">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-8">
      <div
        className={cn(
          "bg-pink-900/10 border-pink-300/20 relative w-full overflow-hidden rounded-md border-2",
          "backdrop-blur-sm",
          "lg:col-span-5",
        )}
      >
        <DotPattern width={5} height={5} />
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="from-pink-500/10 to-pink-200/5 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 size-full mix-blend-overlay",
                "bg-[linear-gradient(to_right,rgba(255,192,203,0.1)_1px,transparent_1px)]",
                "bg-[size:24px]",
              )}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Badge variant="secondary" className="bg-pink-300/20 text-pink-200 border-pink-300/30 font-open-sans-custom text-xs">
            ВНЕШНОСТЬ
          </Badge>
          <Badge
            variant="outline"
            className="hidden lg:flex bg-pink-300/10 text-pink-200 border-pink-300/20 font-open-sans-custom text-xs"
          >
            <SparklesIcon className="me-1 size-3" /> Главный образ
          </Badge>
        </div>
        <div className="flex flex-col p-3 lg:flex-row">
          <div className="pb-2 lg:w-[30%]">
            <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Десскич 🐐
            </span>
          </div>
          <ul className="text-pink-200 grid gap-2 text-xs lg:w-[70%] font-open-sans-custom">
            {[
              "Козочка с рожками и нежным характером",
              "Розово-зелёная цветовая палитра образа",
              "Платье в стиле лолиты с бантом",
              "Длинные вьющиеся волосы с хвостиками",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-[1.05rem] h-[1.05rem] text-pink-300 flex-shrink-0" strokeWidth={3} />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PricingCard
        titleBadge="ХАРАКТЕР"
        priceLabel="Десскич"
        priceSuffix=""
        features={[
          "Нежная и добрая козочка",
          "Любит цветы и природу",
          "Спокойный, задумчивый взгляд",
          "История пока в разработке",
        ]}
        className="lg:col-span-3"
        cta="Узнать больше"
      />

      <PricingCard
        titleBadge="ДЕТАЛИ ОБРАЗА"
        priceLabel="Аксессуары"
        priceSuffix=""
        features={[
          "Светло-зелёная брошь-бабочка на груди",
          "Жёлтый бант на поясе",
          "Белые гетры с бантиками",
          "Розовые туфли на каблучке",
        ]}
        className="lg:col-span-4"
        cta="Смотреть арт"
        showArt
      />

      <PricingCard
        titleBadge="ЦВЕТА"
        priceLabel="Палитра"
        priceSuffix=""
        features={["Розовый - нежность и тепло", "Зелёный - природа и украшения", "Жёлтый - яркость и уют"]}
        className="lg:col-span-4"
        cta="Смотреть арт"
        showArt
      />

      <PricingCard
        titleBadge="ИСТОРИЯ"
        priceLabel="Скоро"
        priceSuffix=""
        features={[
          "Настя работает над историей Десскич",
          "Следи за обновлениями в Telegram",
          "Новые арты появляются регулярно",
          "Поддержи в комментариях!",
        ]}
        className="lg:col-span-8"
        cta="Подписаться"
      />
    </div>
  )
}
