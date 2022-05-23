import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 1920px;
    height: 801px;
    border: 1px solid teal;
    background-color: rgba(248, 248, 248, 1);
    display: flex;
    
`
const Leftdiv = styled.div`
  width: 50%;
  height: 40%;
  border: 2px solid red;
  margin: auto;
`
const Rightdiv = styled.div`
  width: 50%;
  height: 60%;
  border: 2px solid blue;
  margin: auto;
`
const LeftTop = styled.div`
  width: 38.5%;
  height: 30%;
  border: 1px solid red;
`
const Form = () => {
  return (
    <Container>
        <Leftdiv>
            <LeftTop></LeftTop>
        </Leftdiv>
        <Rightdiv>

        </Rightdiv>
    </Container>
  )
}

export default Form