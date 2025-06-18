"use client"

import { Play } from "lucide-react"

interface TrailerButtonProps {
  isLoaded: boolean
  onClick: () => void
}

export function TrailerButton({ isLoaded, onClick }: TrailerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-bold text-white rounded-lg transition-all duration-1200 delay-1400 transform hover:scale-105 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 border-2 border-bolivia-yellow/50 hover:border-bolivia-yellow ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <Play className="w-5 h-5" />🎬 VER TRAILER
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-bolivia-yellow/20 to-bolivia-red/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}
