import React from 'react'
import styled from 'styled-components'
import Consultbox from './Consultbox'
import Searchbox from './Searchbox'
import Collaborate from './Collaborate'
const Container = styled.div`
    width: 1420px;
    border: 2px solid blue;
    margin: auto;
    display: grid;
    grid-template-rows: repeat(1fr, 3);
    grid-gap: 50px;
`
const ExpertCloud = () => {
  return (
      <div style={{marginBottom: '50px'}}>
        <h1>Expert Cloud</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <Container>
        <Searchbox />
        <Consultbox />
        <Collaborate />
    </Container>
    </div>
  )
}

export default ExpertCloud