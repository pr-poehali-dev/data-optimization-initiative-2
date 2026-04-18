import { useEffect, useState } from "react"
import { Warp } from "@paper-design/shaders-react"

export function LiquidMetalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 bg-[#010e1a]" />
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Warp
        style={{ width: "100%", height: "100%" }}
        color1="hsla(200, 60%, 8%, 1)"
        color2="hsla(200, 70%, 30%, 1)"
        color3="hsla(220, 50%, 45%, 1)"
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