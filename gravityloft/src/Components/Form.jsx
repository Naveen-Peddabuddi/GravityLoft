import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 801px;
    /* border: 1px solid teal; */
    background-color: rgba(248, 248, 248, 1);
    display: flex;
    
`
const Leftdiv = styled.div`
  width: 50%;
  height: 40%;
  /* border: 2px solid red; */
  margin: auto;

`
const Rightdiv = styled.div`
  width: 50%;
  height: 60%;
  /* border: 2px solid blue; */
  margin: auto;
  
`
const LeftTop = styled.div`
  width: 85%;
  height: 75%;
  /* border: 1px solid red; */
  margin-left: 11.5%;
`
const LeftBottom = styled.div`
  width: 74%;
  height: 19%;
  /* border: 1px solid black; */
  margin-left: 11.5%;
`
const LeftTopText = styled.p`
  font-family: 'Work Sans';
  font-weight: 600;
  font-style: normal;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: -0.02em;
  color: black;
  text-align: left;
  margin-top: 5px;
`
const Weare = styled.span`
  background: linear-gradient(92.84deg, #5746EC -34.59%, #F55656 93.19%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
`
const LeftbottomText = styled.p`
  font-family: 'Work Sans';
  color: rgba(32, 32, 32, 1);
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  font-size: 22px;
  text-align: left;
  margin-top: 20px;
`
const Formbox = styled.div`
  width: 70%;
  height: 98%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 6px rgba(180, 212, 221, 0.2);
  border-radius: 18px;

`
const Heading = styled.p`
  font-family: 'Work Sans';
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
  text-align: center;
  color: #000000;
`
const InputHeading = styled.p`
  font-family: 'Work Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color : #666666;
  text-align: left;
  margin-left: 20px;
`
const Input = styled.input`
  width: 90%;
  height: 10%;
  margin-right: 15px;
  color: black;
  font-size: 18px;
  font-family: 'Work Sans';
  font-weight: 500;
  padding-left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
const Getstarted = styled.button`
  width: 95%;
  height: 10%;
  background: rgba(87, 70, 236, 1);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-right: 8px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  margin-top: 25px;
  border: none;
`
const Form = () => {
  return (
    <Container className='App'>
        <Leftdiv>
            <LeftTop>
              <LeftTopText>
               <Weare>We are </Weare><br /> 
                the best way to connect <br />
                with Industry Experts
              </LeftTopText>
            </LeftTop>
            <LeftBottom>
              <LeftbottomText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque nam animi unde beatae dolorem fuga! ?
              </LeftbottomText>
            </LeftBottom>
        </Leftdiv>
        <Rightdiv>
          <Formbox>
            <Heading>
              Get Trial version <br/>
              to find experts
            </Heading>

            <InputHeading>
            Full Name
            </InputHeading>
           <Input />
            <InputHeading>
            Email Address
            </InputHeading>
            <Input />
            <Getstarted>
              Get Started
            </Getstarted>
          </Formbox>
        </Rightdiv>
    </Container>
  )
}

export default Form