import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: 47vh;
    margin: auto;
    border-radius: 20px;
    background-color: #5746ec;
    
`
const Heading = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 30px;
  @media screen and (max-width: 1378px) {
  font-size: 45px;
  line-height: 50px;
}
@media screen and (max-width: 1245px) {
  font-size: 45px;
  line-height: 50px;
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
  font-size: 45px; 
  line-height: 60px;
}
@media screen and (max-width: 440) {
  font-size: 20px
}
`
const Conpara = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  @media screen and (max-width: 1378px) {
  font-size: 17px;
  line-height: 25px;
}
@media screen and (max-width: 1245px) {
  font-size: 16px;
  line-height: 23px;
}
@media screen and (max-width: 1115px) {
  font-size: 15px;
  line-height: 21px;
}
@media screen and (max-width: 995px) {
  font-size: 14px;
  line-height: 18px;
}
@media screen and (max-width: 870px) {
  font-size: 13px;
  line-height: 15px;
}
@media screen and (max-width: 750px) {
  font-size: 12px;
  line-height: 12px;
}
@media screen and (max-width: 635px) {
  font-size: 11px;
  line-height: 10px;
}
@media screen and (min-width: 1378px) {
  font-size: 18px; 
  line-height: 26px;
}
`
const Conbutton = styled.button`
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 60%;
  height: 18%;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 2vh;
  line-height: 21px;
  text-align: center;
  color: #5746EC;
  border: none;
  &:hover{
    cursor: pointer;
  }
`
const Middiv = styled.div`
  width: 60%;
  height: 60%;
  margin: auto;
  margin-top: 10%;
  border: 1px solid transparent;
`
const ContactUs = () => {
  return (
    <Container >
      <Middiv className='App'>
        <Heading>
            Contact us, If you <br />
            are facing any problems
        </Heading>
        <Conpara>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem sit vero nemo, recusandae voluptas qui necessitatibus consequuntur porro veritatis alias animi expedita quas debitis unde blanditiis at dolores. Consequatur!
        </Conpara>
        <Conbutton>
          Contact Now
        </Conbutton>
      </Middiv>   
    </Container>
  )
}

export default ContactUs