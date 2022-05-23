import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 1420px;
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

`
const ContactUs = () => {
  return (
    <Container>
        <Heading>
            Contact us If you are facing any problem
        </Heading>
    </Container>
  )
}

export default ContactUs