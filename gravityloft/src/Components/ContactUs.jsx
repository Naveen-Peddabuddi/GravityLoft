import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: 408px;
    margin: auto;
    border-radius: 20px;
    background-color: #5746ec;
`
const Heading = styled.h1`
    color: rgba(255, 255, 255, 1);
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: 60px;
    text-align: center;
    
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
`
const Conbutton = styled.button`
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 30%;
  height: 10%;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #5746EC;
  border: none;
`
const ContactUs = () => {
  return (
    <Container className='App'>
        <Heading>
            Contact us,If you <br />
            are facing any problems
        </Heading>
        <Conpara>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem sit vero nemo, recusandae voluptas qui necessitatibus consequuntur porro veritatis alias animi expedita quas debitis unde blanditiis at dolores. Consequatur!
        </Conpara>
        <Conbutton>
          Contact Now
        </Conbutton>
    </Container>
  )
}

export default ContactUs