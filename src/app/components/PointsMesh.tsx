"use client"
// PointsMesh.tsx
import { useRef, useMemo } from "react"
import { Points, PointMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function PointsMesh() {
    const ref = useRef<THREE.Points>(null)
    const numPoints = 50000

    const positions = useMemo(() => {
        const array = new Float32Array(numPoints * 3)
        for (let i = 0; i < numPoints * 3; i++) {
            array[i] = (Math.random() - 0.5) * 200 // spread them out more
        }
        return array
    }, [])

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.001
        }
    })

    return (
        <mesh>
            <sphereGeometry />
            <meshLambertMaterial color={'hotpink'}/>
        </mesh>
    )
}
