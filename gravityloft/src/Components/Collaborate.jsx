import React from 'react'
import styled from 'styled-components'
import collaborate from '../Assets/Images/Collaborate.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Container = styled.div`
    width: 100%;
    height: 70vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 100px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`
const Leftdiv = styled.div`
  width: 40%;
  height: 70%;
  margin: auto;
  margin-left: 5%;
  text-align: left;
`
const Lefth1 = styled.h1`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 5vh;
  line-height: 5vh;
  background: linear-gradient(92.84deg, #5746EC -34.59%, #F55656 93.19%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-left: 20px;
  margin-bottom: 20px;
`
const Lefth3 = styled.h3`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 2vh;
  line-height: 2.5vh;
  color: #000000;
  margin-left: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 1017px) {
    font-size: 33px;
    line-height: 54px;
  }
`
const Leftpara = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 2vh;
  line-height: 2.5vh;
  color: #5C5F62;
  margin-left: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 870px) {
    font-size: 14px;
  }
  @media screen and (max-width: 650px) {
    font-size: 11px;
    line-height: 2vh
  }
  @media screen and (max-width: 550px) {
    font-size: 9px;
    line-height: 2vh
  }
`
const Rightdiv = styled.div`
  width: 45%;
  height: 100%;
  background: #1c05ed;
  opacity: 0.6;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.06);
  border-radius: 0px 12px 12px 0px; 
  display : flex;
  justify-content: center;
`
const Imgdiv = styled.div`
  margin-top: 12%;
`
const Getstarted = styled.span`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 2vh;
  color: #5746EC;
  margin-left: 20px;
  display: flex;
  &:hover{
    cursor: pointer;
  }
`
const Collaborate = () => {
  return (
    <Container>
        <Leftdiv>
          <Lefth1>
            Collaborate.
          </Lefth1>
          <Lefth3>
            with Experts is easy now.
          </Lefth3>
          <Leftpara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi veniam dolor quo dicta aliquam beatae itaque, nulla rem explicabo. Iure in ea cum, deleniti consectetur esse labore magnam. Error!
          </Leftpara>
          <Getstarted>
            Get started
            <ChevronRightIcon />
          </Getstarted>
        </Leftdiv>
        <Rightdiv>
            <Imgdiv className='App'>
              <img src={collaborate} alt="" width='90%' height='80%'/>
            </Imgdiv>
        </Rightdiv>
    </Container>
  )
}

export default Collaborate