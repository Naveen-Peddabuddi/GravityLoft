import React from 'react'
import styled from 'styled-components'
import pic from '../Assets/Images/3pic.png'
const Container = styled.div`
    width: 100%;
    height: 671px;
    margin-top: 50px;
    border: 1px solid black;
    margin: auto;
    display: flex;
    justify-content: space-between;
`
const Leftdiv = styled.div`
  width: 45%;
  height: 100%;
  background: #1c05ed;
  opacity: 0.6;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.06);
  border-radius: 0px 12px 12px 0px;
`
const Rightdiv = styled.div`
  width: 40%;
  height: 70%;
  /* border: 1px solid blue; */
  margin: auto;
  margin-left: 5%;
  text-align: left;
  
`
const Imgdiv = styled.div`
margin-top: 12%;
;
`
const Consultbox = () => {
  return (
    <Container>
        <Leftdiv className='App'>
          <Imgdiv>
             <img src={pic} alt=""/>
          </Imgdiv>
            
        </Leftdiv>
        <Rightdiv>

        </Rightdiv>
    </Container>
  )
}

export default Consultbox