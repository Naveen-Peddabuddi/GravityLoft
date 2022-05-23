import React from 'react'
import styled from 'styled-components'
import Consultbox from './Consultbox'
import Searchbox from './Searchbox'
import Collaborate from './Collaborate'
const Container = styled.div`
    width: 70%;
    border: 2px solid blue;
    margin: auto;
    /* display: grid;
    grid-template-rows: repeat(1fr, 3);
    grid-gap: 50px; */
`

const Heading = styled.h1`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 82px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 0px;
`
const Text = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #5C5F62;
`
const ExpertCloud = () => {
  return (
      <div style={{marginBottom: '50px'}}>
        <Heading>Expert Cloud</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    <Container>
        <Searchbox />
        <Consultbox />
        <Collaborate />
    </Container>
    </div>
  )
}

export default ExpertCloud