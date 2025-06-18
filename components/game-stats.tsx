"use client"

import { useState } from "react"

export function GameStats() {
  const [activeTab, setActiveTab] = useState("stats")

  const stats = [
    { icon: "💀", label: "Tasa de Mortalidad Real", value: "96%", desc: "Del Camino de los Yungas" },
    { icon: "📏", label: "Longitud Total", value: "64 KM", desc: "La Paz - Coroico" },
    { icon: "⬇️", label: "Caída Máxima", value: "600m", desc: "Precipicio sin protección" },
    { icon: "🌧️", label: "Días de Lluvia", value: "200+", desc: "Por año en la región" },
  ]

  const rankings = [
    { rank: 1, name: "CiclonBoliviano", time: "12:34", deaths: 0 },
    { rank: 2, name: "YungasRider", time: "13:45", deaths: 2 },
    { rank: 3, name: "AndesExtreme", time: "14:12", deaths: 1 },
    { rank: 4, name: "DeathRoadPro", time: "15:33", deaths: 5 },
    { rank: 5, name: "BolivianBiker", time: "16:21", deaths: 3 },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto bg-black/80 backdrop-blur-sm rounded-lg border border-bolivia-red/50 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab("stats")}
          className={`flex-1 py-3 px-4 text-sm font-bold transition-colors ${
            activeTab === "stats" ? "bg-bolivia-red text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          📊 ESTADÍSTICAS
        </button>
        <button
          onClick={() => setActiveTab("ranking")}
          className={`flex-1 py-3 px-4 text-sm font-bold transition-colors ${
            activeTab === "ranking" ? "bg-bolivia-red text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          🏆 RANKING
        </button>
        <button
          onClick={() => setActiveTab("features")}
          className={`flex-1 py-3 px-4 text-sm font-bold transition-colors ${
            activeTab === "features" ? "bg-bolivia-red text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          🎮 CARACTERÍSTICAS
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "stats" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-bolivia-red/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{stat.icon}</span>
                  <div>
                    <div className="text-2xl font-black text-bolivia-yellow">{stat.value}</div>
                    <div className="text-sm font-bold text-white">{stat.label}</div>
                    <div className="text-xs text-gray-400">{stat.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "ranking" && (
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-bolivia-yellow mb-4">🏆 TOP CICLISTAS EXTREMOS</h3>
            {rankings.map((player) => (
              <div
                key={player.rank}
                className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg border border-gray-700 hover:border-bolivia-yellow/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      player.rank === 1
                        ? "bg-yellow-500 text-black"
                        : player.rank === 2
                          ? "bg-gray-400 text-black"
                          : player.rank === 3
                            ? "bg-orange-600 text-white"
                            : "bg-gray-700 text-white"
                    }`}
                  >
                    {player.rank}
                  </div>
                  <span className="font-bold text-white">{player.name}</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-bolivia-green">⏱️ {player.time}</span>
                  <span className="text-red-400">💀 {player.deaths}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-bolivia-yellow">🎮 MECÁNICAS DE JUEGO</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Control realista de bicicleta</li>
                <li>• Sistema de equilibrio dinámico</li>
                <li>• Física de terreno avanzada</li>
                <li>• Clima cambiante en tiempo real</li>
                <li>• Múltiples rutas y atajos secretos</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-bolivia-yellow">🏔️ ENTORNO NATURAL</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Recreación fiel de los Yungas</li>
                <li>• Flora y fauna boliviana auténtica</li>
                <li>• Efectos climáticos inmersivos</li>
                <li>• Paisajes andinos espectaculares</li>
                <li>• Sonidos ambientales reales</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
