/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 iphone.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Iphone.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Runko001.geometry} material={materials.Runko} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Screen001.geometry} material={materials.Screen} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Bezels001.geometry} material={materials.Bezels} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Logo001.geometry} material={materials.Logo} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Glass001.geometry} material={materials.Glass} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Backglass001.geometry} material={materials.Backglass} position={[0, 0 , 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.flash001.geometry} material={materials.Flash} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.CameraLens_topleft001.geometry} material={materials['Material #4441']} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Cameralens_bottomleft001.geometry} material={materials['Material #4440']} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Cameralens_right001.geometry} material={materials['Material #4442']} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Camera_Bezels001.geometry} material={materials.Runko} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.IR001.geometry} material={materials.Ir} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Buttons001.geometry} material={materials.Runko} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
      <mesh geometry={nodes.Raidat001.geometry} material={materials.Backglass} position={[0, 0, 0]} rotation={[3.14, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Iphone.gltf')