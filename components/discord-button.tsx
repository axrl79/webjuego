"use client"

import { MessageCircle } from "lucide-react"

interface DiscordButtonProps {
  isLoaded: boolean
  onClick: () => void
}

export function DiscordButton({ isLoaded, onClick }: DiscordButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-bold text-white rounded-lg transition-all duration-1200 delay-1600 transform hover:scale-105 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 border-2 border-indigo-400/50 hover:border-indigo-300 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <MessageCircle className="w-5 h-5" />💬 ÚNETE A DISCORD
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}
