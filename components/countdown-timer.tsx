"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
  // Crear una nueva fecha con la hora objetivo (21:20) exactamente en 10 días
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 10);
  launchDate.setHours(21); // 21 horas = 9 PM
  launchDate.setMinutes(20); // 20 minutos
  launchDate.setSeconds(0);
  launchDate.setMilliseconds(0);

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-sm rounded-lg p-4 border-2 border-bolivia-red animate-pulse">
      <div className="text-center">
        <h3 className="text-sm font-bold text-bolivia-yellow mb-2">🚀 LANZAMIENTO OFICIAL</h3>
        <div className="flex gap-4 text-white">
          <div className="text-center">
            <div className="text-2xl font-black text-bolivia-red">{timeLeft.days}</div>
            <div className="text-xs text-gray-400">DÍAS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-bolivia-yellow">{timeLeft.hours}</div>
            <div className="text-xs text-gray-400">HORAS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-bolivia-green">{timeLeft.minutes}</div>
            <div className="text-xs text-gray-400">MIN</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-white">{timeLeft.seconds}</div>
            <div className="text-xs text-gray-400">SEG</div>
          </div>
        </div>
      </div>
    </div>
  )
}
