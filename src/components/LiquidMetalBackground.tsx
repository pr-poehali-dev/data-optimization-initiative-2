import { useEffect, useState } from "react"
import { Warp } from "@paper-design/shaders-react"

export function LiquidMetalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 bg-[#00042e]" />
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Warp
        style={{ width: "100%", height: "100%" }}
        color1="hsla(330, 60%, 10%, 1)"
        color2="hsla(340, 70%, 35%, 1)"
        color3="hsla(90, 40%, 40%, 1)"
        scale={0.5}
        rotation={0}
        speed={0.12}
        proportion={0.35}
        softness={1}
        distortion={0.15}
        swirl={0.7}
        swirlIterations={8}
        shapeScale={0.1}
        shape={0}
      />
    </div>
  )
}