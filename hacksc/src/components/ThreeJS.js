import React from 'react'
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

function ThreeJS() {
  return (
    <div>ThreeJS</div>
  )
}

export default ThreeJS