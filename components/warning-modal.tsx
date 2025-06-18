"use client"
import { useEffect, useState } from "react"

interface WarningModalProps {
  isVisible: boolean
}

export function WarningModal({ isVisible }: WarningModalProps) {
  const [showContent, setShowContent] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([])

  const dangerTexts = [
    "¡CAMINO DE LA MUERTE!",
    "¡YUNGAS ROAD!",
    "¡DEATH ROAD!",
    "¡PELIGRO EXTREMO!"
  ]

  useEffect(() => {
    if (isVisible) {
      // Animación de entrada escalonada
      setTimeout(() => setShowContent(true), 200)
      
      // Cambio de texto cada 2 segundos
      const textInterval = setInterval(() => {
        setTextIndex(prev => (prev + 1) % dangerTexts.length)
      }, 2000)

      // Generar partículas aleatorias
      const particleInterval = setInterval(() => {
        setParticles(prev => [
          ...prev.slice(-20), // Mantener solo las últimas 20
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100
          }
        ])
      }, 300)

      return () => {
        clearInterval(textInterval)
        clearInterval(particleInterval)
      }
    } else {
      setShowContent(false)
      setParticles([])
    }
  }, [isVisible, dangerTexts.length])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 overflow-hidden">
      {/* Partículas de fondo */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-red-500/30 rounded-full animate-ping"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          />
        ))}
      </div>

      {/* Efecto de rayos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      {/* Círculos concéntricos */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 border-2 border-red-500/20 rounded-full animate-ping" style={{animationDuration: '3s'}} />
        <div className="absolute w-80 h-80 border-2 border-yellow-500/20 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}} />
        <div className="absolute w-64 h-64 border-2 border-red-500/20 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '1s'}} />
      </div>

      {/* Contenido principal */}
      <div className={`text-center relative z-10 transition-all duration-1000 ${
        showContent ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
      }`}>
        
        {/* Calavera con efectos */}
        <div className="relative mb-6">
          <div className="text-8xl animate-bounce filter drop-shadow-2xl">💀</div>
          <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-2 left-2 text-6xl animate-ping opacity-50">💀</div>
        </div>

        {/* Título principal con transiciones */}
        <div className="relative mb-4 h-20 flex items-center justify-center">
          <div 
            key={textIndex}
            className="text-3xl font-black mb-2 animate-pulse transform transition-all duration-500 hover:scale-110"
            style={{
              background: 'linear-gradient(45deg, #DC2626, #FEF3C7, #DC2626)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 2s ease infinite, glow 2s ease-in-out infinite alternate'
            }}
          >
            {dangerTexts[textIndex]}
          </div>
        </div>

        {/* Descripción con efecto typewriter */}
        <div className="text-xl text-gray-400 mb-2 animate-pulse">
          <span className="inline-block animate-bounce" style={{animationDelay: '0s'}}>E</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>l</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}> </span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>s</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>e</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.5s'}}>n</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.6s'}}>d</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.7s'}}>e</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.8s'}}>r</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.9s'}}>o</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1s'}}> </span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1.1s'}}>m</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1.2s'}}>á</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1.3s'}}>s</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1.4s'}}> </span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1.5s'}}>p</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1.6s'}}>e</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1.7s'}}>l</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1.8s'}}>i</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '1.9s'}}>g</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2s'}}>r</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2.1s'}}>o</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2.2s'}}>s</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2.3s'}}>o</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2.4s'}}> </span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2.5s'}}>d</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2.6s'}}>e</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2.7s'}}> </span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2.8s'}}>B</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '2.9s'}}>o</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '3s'}}>l</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '3.1s'}}>i</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '3.2s'}}>v</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '3.3s'}}>i</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '3.4s'}}>a</span>
        </div>

        {/* Texto de carga con efectos */}
        <div className="text-lg text-red-800 mb-6 animate-pulse">
          <span className="inline-block animate-pulse">Preparando la aventura extrema</span>
          <span className="inline-block animate-bounce ml-2">.</span>
          <span className="inline-block animate-bounce ml-1" style={{animationDelay: '0.2s'}}>.</span>
          <span className="inline-block animate-bounce ml-1" style={{animationDelay: '0.4s'}}>.</span>
        </div>

        {/* Ciclista con múltiples efectos */}
        <div className="relative">
          <div className="text-6xl animate-spin hover:animate-bounce transition-all duration-300 cursor-pointer transform hover:scale-125">
            🚴‍♂️
          </div>
          <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-lg animate-pulse" />
          
          {/* Efectos de velocidad */}
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2">
            <div className="flex space-x-1">
              <div className="w-4 h-1 bg-white/60 animate-pulse" style={{animationDelay: '0s'}} />
              <div className="w-3 h-1 bg-white/40 animate-pulse" style={{animationDelay: '0.1s'}} />
              <div className="w-2 h-1 bg-white/20 animate-pulse" style={{animationDelay: '0.2s'}} />
            </div>
          </div>
        </div>

        {/* Barra de progreso animada */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full animate-pulse">
              <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2 animate-pulse">
            Cargando experiencia de adrenalina...
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glow {
          from { text-shadow: 0 0 5px #DC2626, 0 0 10px #DC2626, 0 0 15px #DC2626; }
          to { text-shadow: 0 0 10px #DC2626, 0 0 20px #DC2626, 0 0 30px #DC2626; }
        }
      `}</style>
    </div>
  )
}