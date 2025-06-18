"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { RobloxCharacter } from "./roblox-character"
import { DangerousPath } from "./dangerous-path"
import { SinisterMountains } from "./sinister-mountains"

function Scene() {
  return (
    <>
      {/* Ambiente negro mate */}
      <Environment preset="night" />
      
      {/* Iluminación ambiental en crema oscuro */}
      <ambientLight intensity={0.3} color="#D4C4A8" />
      
      {/* Luz direccional principal en crema */}
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={0.6} 
        color="#E8D7C3" 
        castShadow
      />
      
      {/* Luz de relleno gris mate */}
      <directionalLight 
        position={[-5, 6, 3]} 
        intensity={0.4} 
        color="#9A9A9A" 
      />
      
      {/* Luz puntual en crema oscuro */}
      <pointLight 
        position={[-5, 4, -5]} 
        intensity={0.5} 
        color="#C8B99C" 
        distance={15}
        decay={1}
      />
      
      {/* Luz cenital gris suave */}
      <pointLight 
        position={[0, 10, 0]} 
        intensity={0.5} 
        color="#B5B5B5" 
        distance={20}
        decay={1}
      />
      
      {/* Spotlight en crema mate */}
      <spotLight
        position={[0, 12, 5]}
        angle={0.6}
        penumbra={0.8}
        intensity={0.3}
        color="#DDD0C0"
        target-position={[0, 0, 0]}
        castShadow
      />
      
      {/* Luz adicional para el camino en tono crema */}
      <pointLight 
        position={[0, 3, -5]} 
        intensity={0.4} 
        color="#D2C2A6" 
        distance={12}
        decay={1}
      />

      {/* Niebla gris mate */}
      <fog attach="fog" args={["#6A6A6A", 6, 35]} />

      {/* Personajes con colores bolivianos */}
      <RobloxCharacter position={[-2, 0, 1]} color="#CE1126" />
      <RobloxCharacter position={[2, 0, 1]} color="#FFD100" />
      <RobloxCharacter position={[0, 0, 2]} color="#007934" />

      <DangerousPath />
      <SinisterMountains />

      {/* Controles con rotación más lenta */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />
    </>
  )
}

export function ThreeScene() {
  return (
    <Canvas 
      camera={{ position: [0, 4, 12], fov: 65 }} 
      shadows
      style={{ background: 'linear-gradient(to bottom, #4A4A4A, #2E2E2E)' }}
    >
      <Scene />
    </Canvas>
  )
}