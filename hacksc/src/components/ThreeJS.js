import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJS = () => {
  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  camera.position.z = 10;
  camera.position.y = 30;
  const renderer = useRef(new THREE.WebGLRenderer());

  const mount = useRef(null);

  useEffect(() => {
    const { current: cameraInstance } = camera;
    const { current: rendererInstance } = renderer;
    const { current: sceneInstance } = scene;

    rendererInstance.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(rendererInstance.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    sceneInstance.add(cube);

    cameraInstance.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      rendererInstance.render(sceneInstance, cameraInstance);
    };

    animate();
  }, []);

  return <div ref={mount} />;
};

export default ThreeJS;
