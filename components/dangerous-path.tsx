"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export function DangerousPath() {
  const pathRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (pathRef.current) {
      pathRef.current.position.z = ((state.clock.elapsedTime * 0.5) % 20) - 10
    }
  })

  return (
    <group ref={pathRef}>
      {Array.from({ length: 10 }).map((_, i) => (
        <group key={i} position={[0, 0, -i * 4]}>
          {/* Camino principal */}
          <mesh position={[Math.sin(i * 0.8) * 2, -2.8, 0]} rotation={[-Math.PI / 2, 0, Math.sin(i * 0.4) * 0.2]}>
            <planeGeometry args={[3, 2]} />
            <meshStandardMaterial color="#1A1A1A" roughness={0.9} emissive="#0A0A0A" emissiveIntensity={0.2} />
          </mesh>

          {/* Bordes del camino (precipicios) */}
          <mesh position={[Math.sin(i * 0.8) * 2 - 2, -3, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.5, 3, 2]} />
            <meshStandardMaterial color="#0F0F0F" />
          </mesh>

          {/* Rocas peligrosas */}
          {i % 2 === 0 && (
            <mesh position={[Math.sin(i * 0.8) * 2 + 1.5, -2.5, 0.5]} rotation={[0, i * 0.4, 0]}>
              <dodecahedronGeometry args={[0.4, 0]} />
              <meshStandardMaterial color="#333333" />
            </mesh>
          )}
        </group>
      ))}
    </group>
  )
}
