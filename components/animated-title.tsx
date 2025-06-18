"use client"

interface AnimatedTitleProps {
  isLoaded: boolean
}

export function AnimatedTitle({ isLoaded }: AnimatedTitleProps) {
  return (
    <>
      <h1
        className={`text-5xl md:text-7xl lg:text-8xl font-black mb-4 transition-all duration-1200 transform bg-gradient-to-r from-red-900 via-red-800 to-red-950 bg-clip-text text-transparent ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        style={{
          textShadow: "0 0 30px rgba(139, 0, 0, 0.8)",
          animation: "sinisterGlow 3s ease-in-out infinite alternate",
        }}
      >
        AL BORDE
      </h1>

      <h2
        className={`text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-red-900 transition-all duration-1200 delay-300 transform ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        style={{
          textShadow: "0 0 20px rgba(139, 0, 0, 0.6)",
          animation: "abyssGlow 2.5s ease-in-out infinite alternate",
        }}
      >
        DEL ABISMO
      </h2>

      <h3
        className={`text-2xl md:text-3xl font-bold text-gray-500 mb-8 transition-all duration-1200 delay-500 transform ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        style={{ textShadow: "0 0 15px rgba(50, 50, 50, 0.6)" }}
      >
        🏔️ CAMINO DE LA MUERTE BOLIVIANO 💀
      </h3>
    </>
  )
}
