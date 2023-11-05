import React, { useState } from 'react'
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

function VRBuilder() {
    const [inputText, setInputText] = useState('');
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

  return (
    <div className="web-screen-partition">
        <div className="web-left-section">
            left section
        </div>
        <div className="web-right-section">
            right section
            <div className="input-box">
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
            </div>
        </div>
    </div>
  )
}

export default VRBuilder