"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function RealStories() {
  const [currentStory, setCurrentStory] = useState(0)

  const stories = [
    {
      title: "El Testimonio de Marco Aurelio",
      subtitle: "Ciclista Profesional - 2019",
      content:
        "Descendí por el Camino de la Muerte en condiciones extremas. La lluvia había convertido el sendero en un lodazal mortal. A mitad del recorrido, mi rueda trasera se deslizó hacia el precipicio. Solo la experiencia de 15 años me salvó de una caída de 300 metros.",
      emotion: "💀",
      location: "Km 32 - Curva del Diablo",
    },
    {
      title: "La Tragedia de los Hermanos Mamani",
      subtitle: "Transportistas Locales - 2018",
      content:
        "Dos hermanos bolivianos perdieron la vida cuando su camión se precipitó al vacío durante una tormenta. Sus familias aún esperan justicia. Este camino ha cobrado más de 300 vidas en los últimos 20 años.",
      emotion: "😢",
      location: "Sector Yolosa",
    },
    {
      title: "El Milagro de Sarah Johnson",
      subtitle: "Turista Australiana - 2020",
      content:
        "Mi bicicleta se descontroló en una curva ciega. Caí por el barranco pero quedé atrapada en un árbol a 50 metros del abismo. Los rescatistas tardaron 8 horas en sacarme. Nunca olvidaré esa experiencia.",
      emotion: "🙏",
      location: "Mirador de la Muerte",
    },
    {
      title: "El Récord de Velocidad Mortal",
      subtitle: "Competencia Extrema - 2021",
      content:
        "Durante una competencia no oficial, un ciclista alcanzó 89 km/h en el descenso más peligroso. Su bicicleta se desintegró al impactar contra las rocas. Sobrevivió de milagro con múltiples fracturas.",
      emotion: "⚡",
      location: "Recta de la Adrenalina",
    },
  ]

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const story = stories[currentStory]

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-red-950/20 to-black/80 backdrop-blur-sm rounded-lg border border-red-800/50 overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-bolivia-red mb-6 text-center">
          💀 HISTORIAS REALES DEL CAMINO DE LA MUERTE 💀
        </h3>

        <div className="relative bg-black/60 rounded-lg p-6 border border-red-700/30">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevStory}
              className="p-2 rounded-full bg-red-900/50 hover:bg-red-800/70 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="text-center">
              <div className="text-4xl mb-2">{story.emotion}</div>
              <div className="text-sm text-gray-400">
                {currentStory + 1} de {stories.length}
              </div>
            </div>

            <button
              onClick={nextStory}
              className="p-2 rounded-full bg-red-900/50 hover:bg-red-800/70 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Story Content */}
          <div className="text-center space-y-4">
            <h4 className="text-xl font-bold text-bolivia-yellow">{story.title}</h4>
            <p className="text-sm text-bolivia-green font-semibold">{story.subtitle}</p>
            <p className="text-gray-300 leading-relaxed">{story.content}</p>
            <div className="text-xs text-red-400 font-bold">📍 {story.location}</div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStory ? "bg-bolivia-red" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          ⚠️ Historias basadas en testimonios reales del Camino de los Yungas
        </div>
      </div>
    </div>
  )
}
