"use client"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function SinisterMountains() {
  const groupRef = useRef<THREE.Group>(null!)
  // const fogRef = useRef<THREE.Mesh>(null!)
  const lightningRef = useRef<THREE.PointLight>(null!)
  const pathLightsRef = useRef<THREE.Group>(null!)
  const mistRef = useRef<THREE.Group>(null!)
  
  // Crear partículas de niebla
  const fogParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 40,
        y: Math.random() * 8 + 2,
        z: (Math.random() - 0.5) * 30,
        speed: Math.random() * 0.02 + 0.01,
        size: Math.random() * 3 + 2
      })
    }
    return particles
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }

    // Animación de niebla
    if (mistRef.current) {
      mistRef.current.children.forEach((particle, index) => {
        const mesh = particle as THREE.Mesh
        const data = fogParticles[index]
        
        mesh.position.x += Math.sin(state.clock.elapsedTime * data.speed) * 0.01
        mesh.position.z += Math.cos(state.clock.elapsedTime * data.speed) * 0.005
        mesh.rotation.y += 0.01
        
        // Hacer que la niebla se mueva en círculos
        const angle = state.clock.elapsedTime * data.speed * 0.5
        mesh.position.x = data.x + Math.sin(angle) * 2
        mesh.position.z = data.z + Math.cos(angle) * 1
      })
    }

    // Rayos aleatorios
    if (lightningRef.current && Math.random() < 0.005) {
      lightningRef.current.intensity = 5
      lightningRef.current.color.setHex(0x9966FF)
      
      setTimeout(() => {
        if (lightningRef.current) {
          lightningRef.current.intensity = 0
        }
      }, 100)
    }

    // Parpadeo de luces del camino
    if (pathLightsRef.current) {
      pathLightsRef.current.children.forEach((light, index) => {
        const pointLight = light as THREE.PointLight
        const flicker = Math.sin(state.clock.elapsedTime * 3 + index) * 0.3 + 0.7
        pointLight.intensity = flicker * 0.8
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Montañas andinas más oscuras y amenazantes */}
      <mesh position={[-5, 0, -8]} castShadow>
        <coneGeometry args={[3, 6, 5]} />
        <meshStandardMaterial 
          color="#1A1A1A" 
          roughness={0.9} 
          emissive="#0A0A0A" 
          emissiveIntensity={0.1} 
        />
      </mesh>

      <mesh position={[5, 1, -10]} castShadow>
        <coneGeometry args={[4, 8, 5]} />
        <meshStandardMaterial 
          color="#0F0F0F" 
          roughness={0.9} 
          emissive="#050505" 
          emissiveIntensity={0.1} 
        />
      </mesh>

      <mesh position={[0, -1, -15]} castShadow>
        <coneGeometry args={[6, 10, 6]} />
        <meshStandardMaterial 
          color="#151515" 
          roughness={0.9} 
          emissive="#080808" 
          emissiveIntensity={0.1} 
        />
      </mesh>

      {/* Abismo profundo */}
      <mesh position={[0, -15, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[20, 20, 20, 32]} />
        <meshStandardMaterial 
          color="#000000" 
          side={THREE.BackSide} 
          emissive="#050505" 
          emissiveIntensity={0.05} 
        />
      </mesh>

      {/* Camino serpenteante */}
      <group>
        {/* Camino principal */}
        <mesh position={[0, -2.8, -5]} receiveShadow>
          <boxGeometry args={[2, 0.2, 15]} />
          <meshStandardMaterial 
            color="#2A2A2A" 
            roughness={0.8}
            emissive="#1A1A1A"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Curva del camino */}
        <mesh position={[3, -2.8, -12]} rotation={[0, Math.PI / 6, 0]} receiveShadow>
          <boxGeometry args={[2, 0.2, 8]} />
          <meshStandardMaterial 
            color="#2A2A2A" 
            roughness={0.8}
            emissive="#1A1A1A"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Camino que se pierde en la distancia */}
        <mesh position={[-2, -2.8, 5]} rotation={[0, -Math.PI / 4, 0]} receiveShadow>
          <boxGeometry args={[2, 0.2, 12]} />
          <meshStandardMaterial 
            color="#2A2A2A" 
            roughness={0.8}
            emissive="#1A1A1A"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Piedras del camino */}
        {[...Array(8)].map((_, i) => (
          <mesh 
            key={i} 
            position={[
              (Math.random() - 0.5) * 4,
              -2.6,
              -8 + i * 2
            ]}
            castShadow
          >
            <sphereGeometry args={[0.2, 6, 6]} />
            <meshStandardMaterial color="#404040" roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Luces del camino */}
      <group ref={pathLightsRef}>
        {[...Array(6)].map((_, i) => (
          <pointLight
            key={i}
            position={[
              i % 2 === 0 ? -1.5 : 1.5,
              -1.5,
              -3 + i * -2
            ]}
            color="#FF6600"
            intensity={0.8}
            distance={4}
            decay={2}
          />
        ))}
      </group>

      {/* Faroles */}
      {[...Array(6)].map((_, i) => (
        <group key={i} position={[
          i % 2 === 0 ? -1.5 : 1.5,
          -2,
          -3 + i * -2
        ]}>
          {/* Poste */}
          <mesh castShadow>
            <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
            <meshStandardMaterial color="#1A1A1A" />
          </mesh>
          
          {/* Lámpara */}
          <mesh position={[0, 1, 0]} castShadow>
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshStandardMaterial 
              color="#FF6600" 
              emissive="#FF4400"
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
      ))}

      {/* Niebla volumétrica */}
      <group ref={mistRef}>
        {fogParticles.map((particle, i) => (
          <mesh
            key={i}
            position={[particle.x, particle.y, particle.z]}
          >
            <sphereGeometry args={[particle.size, 8, 8]} />
            <meshStandardMaterial
              color="#444444"
              transparent
              opacity={0.15}
              emissive="#222222"
              emissiveIntensity={0.1}
            />
          </mesh>
        ))}
      </group>

      {/* Niebla de suelo */}
      <mesh position={[0, -2.5, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 30]} />
        <meshStandardMaterial
          color="#333333"
          transparent
          opacity={0.2}
          emissive="#111111"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Rayos */}
      <pointLight
        ref={lightningRef}
        position={[0, 10, -10]}
        color="#9966FF"
        intensity={0}
        distance={50}
        decay={1}
      />

      {/* Iluminación ambiental dramática */}
      <ambientLight color="#1A0A2E" intensity={0.3} />
      
      {/* Luz direccional principal */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.5}
        color="#4A4A4A"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Luz de relleno púrpura */}
      <pointLight
        position={[-10, 5, -5]}
        color="#6A0DAD"
        intensity={0.4}
        distance={20}
        decay={2}
      />

      {/* Efectos de partículas extras */}
      <group>
        {[...Array(15)].map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 30,
              Math.random() * 15 + 2,
              (Math.random() - 0.5) * 25
            ]}
          >
            <sphereGeometry args={[0.1, 4, 4]} />
            <meshStandardMaterial
              color="#666666"
              emissive="#333333"
              emissiveIntensity={0.2}
              transparent
              opacity={0.4}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}