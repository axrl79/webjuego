"use client"

export function GameObjectives() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-bolivia-green/10 to-black/80 backdrop-blur-sm rounded-lg border border-bolivia-green/50 overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-bolivia-green mb-6 text-center">🎯 OBJETIVOS DEL JUEGO 🎯</h3>

        {/* Objetivo General */}
        <div className="bg-black/60 rounded-lg p-6 border border-bolivia-green/30 mb-6">
          <h4 className="text-xl font-bold text-bolivia-yellow mb-4">🏆 OBJETIVO GENERAL</h4>
          <p className="text-gray-300 leading-relaxed">
            Desarrollar un videojuego de aventura ambientado en el Camino de la Muerte, que represente una travesía
            ciclista por los Yungas bolivianos, mediante mecánicas de control, superación de obstáculos naturales,
            exploración de rutas alternativas, con el propósito de ofrecer una experiencia inmersiva que combine
            desafío, adrenalina y apreciación del entorno natural.
          </p>
        </div>

        {/* Objetivos Específicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/40 rounded-lg p-4 border border-gray-700">
            <h5 className="text-lg font-bold text-bolivia-red mb-3">🚴‍♂️ SUPERVIVENCIA</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Completar el recorrido sin caer al abismo</li>
              <li>• Mantener el equilibrio en terreno irregular</li>
              <li>• Superar obstáculos naturales extremos</li>
              <li>• Resistir condiciones climáticas adversas</li>
            </ul>
          </div>

          <div className="bg-black/40 rounded-lg p-4 border border-gray-700">
            <h5 className="text-lg font-bold text-bolivia-yellow mb-3">⏱️ DESAFÍO TEMPORAL</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Establecer récords de velocidad</li>
              <li>• Completar rutas en tiempo límite</li>
              <li>• Competir contra otros ciclistas</li>
              <li>• Desbloquear logros por tiempo</li>
            </ul>
          </div>

          <div className="bg-black/40 rounded-lg p-4 border border-gray-700">
            <h5 className="text-lg font-bold text-bolivia-green mb-3">🗺️ EXPLORACIÓN</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Descubrir rutas alternativas secretas</li>
              <li>• Encontrar puntos de interés histórico</li>
              <li>• Coleccionar elementos culturales</li>
              <li>• Documentar flora y fauna local</li>
            </ul>
          </div>

          <div className="bg-black/40 rounded-lg p-4 border border-gray-700">
            <h5 className="text-lg font-bold text-red-400 mb-3">🏔️ INMERSIÓN CULTURAL</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Aprender sobre la historia boliviana</li>
              <li>• Interactuar con comunidades locales</li>
              <li>• Experimentar tradiciones andinas</li>
              <li>• Valorar el patrimonio natural</li>
            </ul>
          </div>
        </div>

        {/* Metas de Progresión */}
        <div className="mt-6 bg-gradient-to-r from-bolivia-red/20 via-bolivia-yellow/20 to-bolivia-green/20 rounded-lg p-4 border border-bolivia-red/30">
          <h5 className="text-lg font-bold text-white mb-3 text-center">🎖️ SISTEMA DE PROGRESIÓN</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl mb-2">🥉</div>
              <div className="text-sm font-bold text-bolivia-yellow">NOVATO</div>
              <div className="text-xs text-gray-400">Completa tu primera ruta</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🥈</div>
              <div className="text-sm font-bold text-bolivia-yellow">EXPERIMENTADO</div>
              <div className="text-xs text-gray-400">Sobrevive 10 descensos</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🥇</div>
              <div className="text-sm font-bold text-bolivia-yellow">LEYENDA</div>
              <div className="text-xs text-gray-400">Domina todos los caminos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
