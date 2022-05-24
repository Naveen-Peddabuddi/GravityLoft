import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    background-color: rgba(248, 248, 248, 1);
    display: flex;
    
`
const Leftdiv = styled.div`
  width: 60%;
  height: 40%;
  margin: auto;

`
const Rightdiv = styled.div`
  width: 50%;
  height: 65%;
  margin: auto;
  
`
const LeftTop = styled.div`
  width: 85%;
  height: 75%;
  margin-left: 11.5%;
`

const LeftTopText = styled.h3`
  font-family: 'Work Sans';
  font-weight: 600;
  font-style: normal; 
  letter-spacing: -0.02em;
  color: black;
  text-align: left;
  margin-top: 5px;
@media screen and (max-width: 1378px) {
  font-size: 50px;
  line-height: 60px;
}
@media screen and (max-width: 1245px) {
  font-size: 45px;
  line-height: 60px;
}
@media screen and (max-width: 1115px) {
  font-size: 40px;
  line-height: 50px;
}
@media screen and (max-width: 995px) {
  font-size: 35px;
  line-height: 40px;
}
@media screen and (max-width: 870px) {
  font-size: 30px;
  line-height: 40px;
}
@media screen and (max-width: 750px) {
  font-size: 25px;
  line-height: 40px;
}
@media screen and (max-width: 635px) {
  font-size: 20px;
  line-height: 30px;
}
@media screen and (min-width: 1378px) {
  font-size: 55px; 
  line-height: 80px;
}
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
  font-size: 25px;
  text-align: left;
  @media screen and (max-width: 1378px) {
  font-size: 24px;
  line-height: 38px;
}
@media screen and (max-width: 1245px) {
  font-size: 22px;
  line-height: 36px;
}
@media screen and (max-width: 1115px) {
  font-size: 20px;
  line-height: 36px;
}
@media screen and (max-width: 995px) {
  font-size: 18px;
  line-height: 34px;
}
@media screen and (max-width: 870px) {
  font-size: 16px;
  line-height: 32px;
}
@media screen and (max-width: 750px) {
  font-size: 14px;
  line-height: 30px;
}
@media screen and (max-width: 635px) {
  font-size: 12px;
  line-height: 28px;
}
@media screen and (min-width: 1378px) {
  font-size: 25px; 
  line-height: 40px;
}
`
const Formbox = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 6px rgba(180, 212, 221, 0.2);
  border-radius: 18px;

`
const Heading = styled.p`
  font-family: 'Work Sans';
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
  text-align: center;
  color: #000000;
  @media screen and (max-width: 1115px) {
  font-size: 25px;
  line-height: 28px;
}
@media screen and (max-width: 635px) {
  font-size: 20px;
  
}
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
  /* margin-right: 15px; */
  color: black;
  font-size: 18px;
  font-family: 'Work Sans';
  font-weight: 500;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
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
  color: #FFFFFF;
  margin-top: 20px;;
  border: none;
  margin-left: 12px;
  &:hover{
    cursor: pointer;
  }
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
                <LeftbottomText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque nam animi unde beatae dolorem fuga! ?
              </LeftbottomText>
              </LeftTopText>
            </LeftTop>
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