import React, { useState, useEffect, useRef } from 'react'
import "./VRBuilder.css"
import {
    Box,
    AccordionButton,
    AccordionIcon,
    Flex,
    AccordionPanel,
    Accordion,
    AccordionItem,
    Select,
    Textarea,
    Input,
    IconButton,
    Button,
  } from "@chakra-ui/react";

  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
  import * as dat from 'dat.gui';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function VRBuilder() {
    const ThreeScene = () => {
        const scene = useRef(new THREE.Scene());
        const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000));
        const renderer = useRef(new THREE.WebGLRenderer());

        var objects = [];
        
        // init();
        // animate();
        const mount = useRef(null);
      
        useEffect(() => {
          const { current: cameraInstance } = camera;
          const { current: rendererInstance } = renderer;
          const { current: sceneInstance } = scene;
      
          // renderer = new THREE.WebGLRenderer( { antialias: true } );
          rendererInstance.setSize(window.innerWidth, window.innerHeight);
          mount.current.appendChild(rendererInstance.domElement);
      
          const orbitControls = new OrbitControls(cameraInstance, rendererInstance.domElement);
		
          const dragControls = new DragControls(objects, cameraInstance, rendererInstance.domElement);
          dragControls.addEventListener( 'dragstart', function () { orbitControls.enabled = false; } );
          dragControls.addEventListener( 'dragend', function () { orbitControls.enabled = true; } );
  
          const axesHelper = new THREE.AxesHelper(5);
          sceneInstance.add(axesHelper);

          const planeGeometry = new THREE.PlaneGeometry(30, 30);
          const planeMaterial = new THREE.MeshBasicMaterial({
              color: 0xFFFFFF,
              side: THREE.DoubleSide
          });
          const plane = new THREE.Mesh(planeGeometry, planeMaterial);
          sceneInstance.add(plane);
          plane.rotation.x = -0.5 * Math.PI;
          plane.receiveShadow = true;

          const gridHelper = new THREE.GridHelper(30);
          sceneInstance.add(gridHelper);
          
          const ambientLight = new THREE.AmbientLight(0x333333);
          sceneInstance.add(ambientLight);
          
          const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.5);
          sceneInstance.add(directionalLight);
          directionalLight.position.set(-30, 50, 0);
          directionalLight.castShadow = true;
          directionalLight.shadow.camera.bottom = -12;
          
          const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
          sceneInstance.add(dLightHelper);
          
          const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
          sceneInstance.add(dLightShadowHelper);

          var boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
          var boxMaterial = new THREE.MeshNormalMaterial();
      
          var mesh = new THREE.Mesh( boxGeometry, boxMaterial );
          sceneInstance.add( mesh );
              objects.push( mesh );

              const nycURL = new URL('./threeJS/assets/model-0-0.glb', import.meta.url);
              const assetLoader = new GLTFLoader();
          
        assetLoader.load(nycURL.href, function(gltf){
            const model = gltf.scene;
            sceneInstance.add(model);
            model.position.set(-100, -100, -100);
        }, undefined, function(error){
            console.error(error);
        });

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
      
        return (
            <div ref={mount} />
        );
    };
    ///////
    const [response, setResponse] = useState("");
    const [textPrompt, setTextPrompt] = useState('');
    const handleChange = (event) => {
        setTextPrompt(event.target.value);
    };

    const handleSendMessage = (text) => {
        // call server here
        console.log(text);
        setTextPrompt(""); // clear message so that it looks like it has been submitted
    };

  return (
    <div className="web-screen-partition">
        <div className="web-left-section"               style={{
                width: '66.67%',  // 2/3 of the page width
                float: 'left',    // Left-aligned
                height: '100vh',  // Full height
              }}>
            <ThreeScene />
        </div>
        <div className="web-right-section">
        <Accordion allowToggle allowMultiple w="100%">
              <AccordionItem>
                <h2>
                  <AccordionButton bg="black" color="white" m={0}>
                    <Box as="span" flex="1" textAlign="left">
                      Accordian 1
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="black" color="white">
                  <Flex align="center">
                    <Box flex="70%">
                    </Box>
                    <Box flex="30%" ml={2}>
                      <Button w="100%" >Submit</Button>
                      <Button w="100%" >Translate</Button>
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton bg="black" color="white" m={0}>
                    <Box as="span" flex="1" textAlign="left">
                      Text Prompt
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="black" color="white">
                    {/* <div className="input-box">
                        <input
                            type="text"
                            placeholder="Enter text"
                            value={inputText}
                            onChange={handleInputChange}
                        />
                        <Box flex="30%" ml={2}>
                            <Button w="100%" >Submit</Button>
                        </Box>
                        <div className="output-box">
                            <p>User Input:</p>
                            <div>{inputText}</div>
                        </div>
                    </div> */}
                  <Textarea
                    onChange={handleChange}
                    value={textPrompt}
                    placeholder="Type LumaAI Genie prompt input"
                    size="sm"
                  />
                  <button onClick={handleSendMessage}>Submit</button>
                  <div className="messageLog">
                    Prompt: {textPrompt}
                    Response: {response}
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton bg="black" color="white" m={0}>
                    <Box as="span" flex="1" textAlign="left">
                        Accordian 3
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="black" color="white">
                  <Input p={"5px"} type="file" />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton bg="black" color="white" m={0}>
                    <Box as="span" flex="1" textAlign="left">
                      Accordian 4
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="black" color="white">
                  {/* Wrap the input and button inside a Flex container */}
                  <Flex alignItems="flex-start" flexDirection="column">

                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default VRBuilder