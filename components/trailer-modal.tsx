"use client"

import { X } from "lucide-react"

interface TrailerModalProps {
  isVisible: boolean
  onClose: () => void
}

export function TrailerModal({ isVisible, onClose }: TrailerModalProps) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl bg-abyss-dark rounded-lg overflow-hidden border-2 border-bolivia-red">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-bolivia-red to-red-800">
          <h3 className="text-xl font-bold text-white">🎬 Trailer Oficial - AL BORDE DEL ABISMO</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-black/20 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-black">
          {/* Simulación de trailer con imágenes y texto */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 animate-trailer-zoom">
              {/* Escena 1 */}
              <div className="space-y-4">
                <div className="text-6xl">🏔️</div>
                <h4 className="text-3xl font-bold text-white">Los Yungas te esperan...</h4>
                <p className="text-lg text-gray-300">El camino más peligroso del mundo</p>
              </div>

              {/* Escena 2 */}
              <div className="space-y-4 opacity-80">
                <div className="text-6xl">🚴‍♂️</div>
                <h4 className="text-2xl font-bold text-bolivia-yellow">300 metros de caída libre</h4>
                <p className="text-base text-gray-400">Una decisión equivocada... es la última</p>
              </div>

              {/* Escena 3 */}
              <div className="space-y-4 opacity-60">
                <div className="text-6xl">💀</div>
                <h4 className="text-xl font-bold text-red-500">¿Sobrevivirás al abismo?</h4>
              </div>
            </div>
          </div>

          {/* Overlay de efectos */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

          {/* Efectos de lluvia */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-4 bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `fall ${1 + Math.random() * 2}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-abyss-gray">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              <p>🇧🇴 Inspirado en el legendario Camino de los Yungas</p>
              <p>⚠️ Contenido extremo - Solo para valientes</p>
            </div>
            <div className="text-right">
              <p className="text-bolivia-yellow font-bold">BETA 2 DISPONIBLE</p>
              <p className="text-xs text-gray-500">Yungas Oscuros Edition</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  )
}
