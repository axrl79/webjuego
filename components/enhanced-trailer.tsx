"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

interface EnhancedTrailerProps {
  isVisible: boolean
  onClose: () => void
}

export function EnhancedTrailer({ isVisible, onClose }: EnhancedTrailerProps) {
  const [currentScene, setCurrentScene] = useState(0)

  const scenes = [
    {
      title: "LOS YUNGAS TE LLAMAN",
      subtitle: "El camino más peligroso del mundo",
      icon: "🏔️",
      bg: "from-gray-900 to-black",
    },
    {
      title: "64 KILÓMETROS DE TERROR",
      subtitle: "La Paz - Coroico",
      icon: "🛣️",
      bg: "from-red-900 to-black",
    },
    {
      title: "600 METROS DE CAÍDA",
      subtitle: "Sin barreras de protección",
      icon: "⬇️",
      bg: "from-orange-900 to-red-900",
    },
    {
      title: "SOLO LOS VALIENTES SOBREVIVEN",
      subtitle: "¿Tienes lo necesario?",
      icon: "💀",
      bg: "from-black to-red-950",
    },
    {
      title: "AL BORDE DEL ABISMO",
      subtitle: "Disponible en BETA 2",
      icon: "🎮",
      bg: "from-bolivia-red to-bolivia-green",
    },
  ]

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible, scenes.length])

  if (!isVisible) return null

  const scene = scenes[currentScene]

  return (
    <div className="fixed inset-0 bg-black/98 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden border-2 border-bolivia-red shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-bolivia-red to-red-800">
          <h3 className="text-xl font-bold text-white">🎬 TRAILER OFICIAL - AL BORDE DEL ABISMO</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-black/20 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-black overflow-hidden">
          {/* Scene Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${scene.bg} transition-all duration-1000`} />

          {/* Main Scene Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="text-8xl md:text-9xl animate-bounce-slow">{scene.icon}</div>
              <div className="space-y-4">
                <h4 className="text-4xl md:text-6xl font-black text-white animate-slide-up">{scene.title}</h4>
                <p className="text-xl md:text-2xl text-gray-300 animate-slide-up-delay">{scene.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Animated Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Falling rocks */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gray-400 rounded-full animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}

            {/* Lightning effects */}
            <div className="absolute inset-0 bg-white opacity-0 animate-lightning-flash" />
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2">
              {scenes.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded transition-all duration-300 ${
                    index === currentScene ? "bg-bolivia-red" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scene counter */}
          <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded text-white text-sm">
            {currentScene + 1} / {scenes.length}
          </div>
        </div>

        {/* Footer with enhanced info */}
        <div className="p-6 bg-gradient-to-r from-abyss-dark to-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl">🇧🇴</div>
              <div className="text-bolivia-yellow font-bold">100% BOLIVIANO</div>
              <div className="text-xs text-gray-400">Cultura auténtica</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">⚡</div>
              <div className="text-bolivia-red font-bold">ADRENALINA PURA</div>
              <div className="text-xs text-gray-400">Experiencia extrema</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🏆</div>
              <div className="text-bolivia-green font-bold">DESAFÍO ÉPICO</div>
              <div className="text-xs text-gray-400">Solo para valientes</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up-delay {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fall {
          from { transform: translateY(-10px); opacity: 1; }
          to { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes lightning-flash {
          0%, 90%, 100% { opacity: 0; }
          5%, 10% { opacity: 0.3; }
        }
        
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 1s ease-out 0.3s both; }
        .animate-slide-up-delay { animation: slide-up-delay 1s ease-out 0.6s both; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-fall { animation: fall linear infinite; }
        .animate-lightning-flash { animation: lightning-flash 8s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
