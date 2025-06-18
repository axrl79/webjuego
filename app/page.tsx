"use client"

import { useState, useEffect } from "react"
import { AnimatedTitle } from "@/components/animated-title"
import { ThreeScene } from "@/components/three-scene"
import { PlayButton } from "@/components/play-button"
import { TrailerButton } from "@/components/trailer-button"
import { DiscordButton } from "@/components/discord-button"
import { WarningModal } from "@/components/warning-modal"
import { EnhancedTrailer } from "@/components/enhanced-trailer"
import { DiscordModal } from "@/components/discord-modal"
import { AudioPlayer } from "@/components/audio-player"
import { CountdownTimer } from "@/components/countdown-timer"
import { GameStats } from "@/components/game-stats"
import { RealStories } from "@/components/real-stories"
import { GameObjectives } from "@/components/game-objectives"

export default function AlBordeDelAbismo() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [showTrailer, setShowTrailer] = useState(false)
  const [showDiscord, setShowDiscord] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handlePlayNow = () => {
    setShowWarning(true)
    setTimeout(() => {
      window.open("https://www.roblox.com/es/games/98982426208675/beta-2", "_blank")
      setShowWarning(false)
    }, 2000)
  }

  const handleShowTrailer = () => {
    setShowTrailer(true)
  }

  const handleShowDiscord = () => {
    setShowDiscord(true)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <CountdownTimer />

      {/* Fondo extremadamente sombrío */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Efectos de niebla y oscuridad */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bolivia-red/10 to-transparent" />
      </div>

      {/* Animación del camino de la muerte */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/30 to-transparent transform animate-road-movement" />
      </div>

      {/* Rayos y relámpagos ocasionales */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent animate-lightning" />
      </div>

      {/* Elementos flotantes siniestros */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-bolivia-red rounded-full animate-float-slow" />
      <div
        className="absolute top-3/4 right-1/4 w-1 h-1 bg-abyss-red rounded-full animate-float-slow"
        style={{ animationDirection: "reverse", animationDuration: "6s" }}
      />
      <div
        className="absolute top-1/2 right-1/6 w-1 h-1 bg-bolivia-yellow rounded-full animate-float-slow"
        style={{ animationDuration: "10s" }}
      />

      <WarningModal isVisible={showWarning} />
      <EnhancedTrailer isVisible={showTrailer} onClose={() => setShowTrailer(false)} />
      <DiscordModal isVisible={showDiscord} onClose={() => setShowDiscord(false)} />
      <AudioPlayer />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center max-w-6xl mx-auto space-y-12">
          <AnimatedTitle isLoaded={isLoaded} />

          {/* Escena 3D */}
          <div
            className={`w-full h-72 md:h-96 mb-8 transition-all duration-1200 delay-700 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <ThreeScene />
          </div>

          {/* Descripción extendida */}
          <div
            className={`max-w-4xl mx-auto space-y-6 transition-all duration-1200 delay-800 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <p
              className="text-lg md:text-xl text-abyss-red mb-6 font-bold"
              style={{ textShadow: "0 0 10px rgba(139, 0, 0, 0.5)" }}
            >
              ⚠️ LA RUTA MÁS MORTAL DE LOS ANDES ⚠️
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Sumérgete en la experiencia más extrema de ciclismo virtual.{" "}
              <strong className="text-bolivia-yellow">Al Borde del Abismo</strong> te transporta al legendario Camino de
              la Muerte boliviano, donde cada pedalada puede ser la última. Con gráficos hiperrealistas y física
              avanzada, experimentarás la adrenalina pura de descender por precipicios de 600 metros sin protección.
            </p>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              🇧🇴 <strong className="text-bolivia-green">Donde muchos entran, pocos salen</strong> - Yungas Extremos 🇧🇴
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <PlayButton isLoaded={isLoaded} onClick={handlePlayNow} />
            <TrailerButton isLoaded={isLoaded} onClick={handleShowTrailer} />
            <DiscordButton isLoaded={isLoaded} onClick={handleShowDiscord} />
          </div>
        </div>

        {/* Secciones adicionales */}
        <div className="w-full space-y-16 mt-16">
          {/* Objetivos del juego */}
          <div
            className={`transition-all duration-1200 delay-1000 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <GameObjectives />
          </div>

          {/* Estadísticas y características */}
          <div
            className={`transition-all duration-1200 delay-1200 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <GameStats />
          </div>

          {/* Historias reales */}
          <div
            className={`transition-all duration-1200 delay-1400 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <RealStories />
          </div>

          {/* Información adicional */}
          <div
            className={`text-center space-y-4 transition-all duration-1200 delay-1600 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="max-w-4xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-bolivia-yellow">🏔️ EL CAMINO MÁS PELIGROSO DEL MUNDO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-black/60 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-bold text-bolivia-red mb-2">📊 DATOS ESCALOFRIANTES</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 300+ muertes registradas en 20 años</li>
                    <li>• Ancho promedio: 3.2 metros</li>
                    <li>• Precipicios de hasta 600 metros</li>
                    <li>• 200+ días de lluvia al año</li>
                    <li>• Temperatura: 5°C a 25°C</li>
                  </ul>
                </div>
                <div className="bg-black/60 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-bold text-bolivia-green mb-2">🌿 BIODIVERSIDAD ÚNICA</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Transición de altiplano a selva</li>
                    <li>• 3,500m a 1,200m de altitud</li>
                    <li>• Ecosistemas de yungas únicos</li>
                    <li>• Flora endémica boliviana</li>
                    <li>• Fauna andina-amazónica</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-gray-600 text-sm md:text-base space-y-2">
              <p>🏔️ Inspirado en el legendario Camino de los Yungas</p>
              <p>📍 La Paz - Coroico: 64 kilómetros de adrenalina pura</p>
              <p>⚡ Desarrollado con tecnología de última generación</p>
            </div>

            {/* Indicador Beta */}
            <div className="inline-block px-6 py-3 bg-abyss-red/20 border-2 border-bolivia-red/50 rounded-lg">
              <span className="text-abyss-red text-sm font-bold">🚧 VERSIÓN BETA 2 - YUNGAS OSCUROS 🚧</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
