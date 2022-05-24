import React from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddSharpIcon from '@mui/icons-material/AddSharp';

const Container = styled.div`
    width: 70%;
    border: 1px solid green;
    margin: auto;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 100px rgba(0, 0, 0, 0.1);
    border-radius: 12px; 
    margin-bottom : 100px;
`
const Heading = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 82px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 5%;
`
const Ques = styled.span`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  color: #000000;
`
const Para = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #5C5F62;
`
const Text = styled.span`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #5C5F62;
`
const FAQ = () => {
  return (
    <>
    <Heading className='App'>
      FAQ
      <Para>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Para>
    </Heading>
    
    <Container>
        <Accordion>
        <AccordionSummary
          expandIcon={<AddSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Ques>
            What is Techrefic ?
            </Ques>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Ques>
            What is Techrefic ?
            </Ques>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Ques>
            What is Techrefic ?
            </Ques>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Ques>
            What is Techrefic ?
            </Ques>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Ques>
            What is Techrefic ?
            </Ques>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Ques>
            What is Techrefic ?
            </Ques>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Ques>
            What is Techrefic ?
            </Ques>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Container>
    </>
  )
}

export default FAQ