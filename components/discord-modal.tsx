"use client"

import { X, Users, MessageCircle } from "lucide-react"

interface DiscordModalProps {
  isVisible: boolean
  onClose: () => void
}

export function DiscordModal({ isVisible, onClose }: DiscordModalProps) {
  if (!isVisible) return null

  const handleJoinDiscord = () => {
    window.open("https://discord.gg/pYasUtXn", "_blank")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-md bg-gradient-to-b from-indigo-900 to-purple-900 rounded-lg overflow-hidden border-2 border-indigo-500 animate-bounce-in">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-indigo-800">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-white" />
            <h3 className="text-xl font-bold text-white">Únete a Discord</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-black/20 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-4">
          <div className="text-6xl animate-bounce">🎮</div>

          <h4 className="text-2xl font-bold text-white">Al Borde del Abismo</h4>

          <div className="flex justify-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>1 Online</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <Users className="w-4 h-4" />
              <span>1 Miembro</span>
            </div>
          </div>

          <div className="space-y-2 text-gray-300">
            <p>🏔️ Comparte tus aventuras extremas</p>
            <p>🚴‍♂️ Encuentra compañeros de ruta</p>
            <p>💀 Intercambia estrategias de supervivencia</p>
            <p>🇧🇴 Celebra la cultura boliviana</p>
          </div>

          <button
            onClick={handleJoinDiscord}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            🚀 UNIRSE AL SERVIDOR
          </button>

          <p className="text-xs text-gray-400">Al unirte aceptas las reglas de la comunidad</p>
        </div>
      </div>
    </div>
  )
}
