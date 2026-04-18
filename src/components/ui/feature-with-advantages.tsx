import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-pink-300/20 text-pink-200 border-pink-300/30 backdrop-blur-sm">О художнике</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Немного обо мне
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-pink-100 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Я Настя — творческий человек, который любит рисовать арты и придумывать персонажей.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Heart className="w-[1.05rem] h-[1.05rem] mt-2 text-pink-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Художник</p>
                  <p className="text-pink-200 text-sm font-open-sans-custom">
                    Рисую арты в аниме-стиле, создаю оригинальных персонажей.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Heart className="w-[1.05rem] h-[1.05rem] mt-2 text-pink-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Творческая душа</p>
                  <p className="text-pink-200 text-sm font-open-sans-custom">
                    Люблю придумывать истории и образы для своих персонажей.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Heart className="w-[1.05rem] h-[1.05rem] mt-2 text-pink-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Дата рождения</p>
                  <p className="text-pink-200 text-sm font-open-sans-custom">
                    22 февраля 2012
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Heart className="w-[1.05rem] h-[1.05rem] mt-2 text-pink-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Telegram</p>
                  <p className="text-pink-200 text-sm font-open-sans-custom">Канал @Cool_Desski4 - арты и обновления.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Heart className="w-[1.05rem] h-[1.05rem] mt-2 text-pink-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">TikTok</p>
                  <p className="text-pink-200 text-sm font-open-sans-custom">
                    @d3sski4_official — видео и творческий процесс.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Heart className="w-[1.05rem] h-[1.05rem] mt-2 text-pink-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Мой ОС — Десскич</p>
                  <p className="text-pink-200 text-sm font-open-sans-custom">
                    Оригинальный персонаж: козочка с нежным характером.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }