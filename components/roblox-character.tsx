"use client"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface RobloxCharacterProps {
  position: [number, number, number]
  color: string
  walking?: boolean
  name?: string
}

export function RobloxCharacter({ 
  position, 
  color, 
  walking = false,
  name 
}: RobloxCharacterProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const leftArmRef = useRef<THREE.Mesh>(null!)
  const rightArmRef = useRef<THREE.Mesh>(null!)
  const leftLegRef = useRef<THREE.Mesh>(null!)
  const rightLegRef = useRef<THREE.Mesh>(null!)
  const headRef = useRef<THREE.Mesh>(null!)
  
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      const floatOffset = Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.05
      groupRef.current.position.y = position[1] + floatOffset
      
      // Slight rotation when not walking
      if (!walking) {
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
      }
    }

    // Walking animation
    if (walking) {
      const walkSpeed = 4
      const walkTime = state.clock.elapsedTime * walkSpeed
      
      // Arms swinging
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = Math.sin(walkTime) * 0.5
        rightArmRef.current.rotation.x = -Math.sin(walkTime) * 0.5
      }
      
      // Legs walking
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = -Math.sin(walkTime) * 0.3
        rightLegRef.current.rotation.x = Math.sin(walkTime) * 0.3
      }
    } else {
      // Idle animations
      const idleTime = state.clock.elapsedTime * 0.8
      
      // Subtle arm movement
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.z = Math.sin(idleTime) * 0.1
        rightArmRef.current.rotation.z = -Math.sin(idleTime + 0.5) * 0.1
      }
    }

    // Head looking around
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1
    }

    // Click animation
    if (clicked) {
      const jumpTime = state.clock.elapsedTime * 8
      if (groupRef.current) {
        groupRef.current.position.y = position[1] + Math.abs(Math.sin(jumpTime)) * 0.3
      }
    }
  })

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 500)
  }

  return (
    <group
      ref={groupRef}
      position={position}
      scale={hovered ? 1.05 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Head */}
      <mesh ref={headRef} position={[0, 1.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial color="#F4C2A1" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.2, 1.7, 0.46]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.2, 1.7, 0.46]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Eye pupils */}
      <mesh position={[-0.2, 1.7, 0.48]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0.2, 1.7, 0.48]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, 1.5, 0.46]}>
        <boxGeometry args={[0.3, 0.05, 0.02]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Bolivian Hat (Bowler Hat) */}
      <group position={[0, 2.3, 0]}>
        {/* Hat brim */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.05, 16]} />
          <meshStandardMaterial color="#2C1810" />
        </mesh>
        {/* Hat crown */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.5, 0.55, 0.4, 16]} />
          <meshStandardMaterial color="#2C1810" />
        </mesh>
        {/* Hat band */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.56, 0.56, 0.08, 16]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </group>

      {/* Torso */}
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 1.6, 0.7]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Shirt details */}
      <mesh position={[0, 0.8, 0.36]}>
        <boxGeometry args={[0.3, 0.8, 0.02]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* Left Arm */}
      <mesh 
        ref={leftArmRef} 
        position={[-0.9, 0.6, 0]} 
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[0.5, 1.4, 0.5]} />
        <meshStandardMaterial color="#F4C2A1" />
      </mesh>

      {/* Right Arm */}
      <mesh 
        ref={rightArmRef} 
        position={[0.9, 0.6, 0]} 
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[0.5, 1.4, 0.5]} />
        <meshStandardMaterial color="#F4C2A1" />
      </mesh>

      {/* Left Leg */}
      <mesh 
        ref={leftLegRef} 
        position={[-0.35, -0.7, 0]} 
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[0.5, 1.4, 0.5]} />
        <meshStandardMaterial color="#2C5F2D" />
      </mesh>

      {/* Right Leg */}
      <mesh 
        ref={rightLegRef} 
        position={[0.35, -0.7, 0]} 
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[0.5, 1.4, 0.5]} />
        <meshStandardMaterial color="#2C5F2D" />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.35, -1.5, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.3, 0.8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0.35, -1.5, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.3, 0.8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Name tag (optional) */}
      {name && (
        <mesh position={[0, 2.8, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[1.5, 0.3]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            transparent 
            opacity={0.9}
          />
        </mesh>
      )}
    </group>
  )
}