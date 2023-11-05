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
        const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
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