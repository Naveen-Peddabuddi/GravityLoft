import React from 'react'
import styled from 'styled-components'
import pic from '../Assets/Images/3pic.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  const Container = styled.div`
      width: 100%;
      height: 70vh;
      margin-top: 50px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0px 5px 100px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
  `
  const Leftdiv = styled.div`
    width: 45%;
    height: 100%;
    background: #1c05ed;
    opacity: 0.6;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    display : flex;
    justify-content: center;
  `
  const Rightdiv = styled.div`
    width: 40%;
    height: 70%;
    margin: auto;
    margin-left: 5%;
    text-align: left;
    
  `
  const Righth1 = styled.h1`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 4vh;
    line-height: 54px;
    background: linear-gradient(92.84deg, #5746EC -34.59%, #F55656 93.19%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-left: 20px;
    margin-bottom: 20px;
  `
  const Imgdiv = styled.div`
  margin-top: 12%;
  ;
  `
  const Righth3 = styled.h3`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 3vh;
    line-height: 3vh;
    color: #000000;
    margin-left: 20px;
    margin-bottom: 20px;
    @media screen and (min-width: 1017px) {
    font-size: 33px;
    line-height: 54px;
  }
  `
  const Rightpara = styled.p`
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
  const Getstarted = styled.span`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 2vh;
    color: #5746EC;
    margin-left: 20px;
    display: flex;
  `
const Consultbox = () => {
  return (
    <Container>
        <Leftdiv>
          <Imgdiv className='App'>
             <img src={pic} alt="" width='90%' height='90%'/>
          </Imgdiv>
            
        </Leftdiv>
        <Rightdiv>
          <Righth1>
            Consult.
          </Righth1>
          <Righth3>
            with Top Industry Experts
          </Righth3>
          <Rightpara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni consectetur, accusantium dolorum laboriosam asperiores consequuntur doloremque hic rerum sed commodi debitis placeat, architecto cum quod facilis aperiam cupiditate illo?
          </Rightpara>
          <Getstarted>
            Get started
            <ChevronRightIcon />
          </Getstarted>
        </Rightdiv>
    </Container>
  )
}

export default Consultbox