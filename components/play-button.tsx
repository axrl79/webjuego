"use client"

interface PlayButtonProps {
  isLoaded: boolean
  onClick: () => void
}

export function PlayButton({ isLoaded, onClick }: PlayButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative px-10 py-5 md:px-16 md:py-8 text-xl md:text-2xl font-black text-white rounded-lg transition-all duration-1200 delay-1200 transform hover:scale-110 hover:shadow-2xl bg-gradient-to-r from-red-900 via-red-800 to-red-950 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{
        boxShadow: "0 0 40px rgba(139, 0, 0, 0.6)",
        animation: "sinisterButton 2s ease-in-out infinite alternate",
      }}
    >
      <span className="relative z-10 flex items-center gap-3">💀 ¡DESAFIAR EL CAMINO! 🏔️</span>
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-950 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}
