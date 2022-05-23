import React from 'react'
import styled from 'styled-components'
import ContactUs from './ContactUs'

const Container = styled.div`
    width: 1431px;
    height: 891px;
    margin: auto;
    border: 1px solid yellow;
`
const Footer = styled.div`
    width: 100%;
    height: 483px;
    border: 1px solid green;
`
const Footerbox = () => {
  return (
    <Container>
        <ContactUs />
        <Footer>
            <h1>Footer</h1>
        </Footer>
    </Container>
  )
}

export default Footerbox