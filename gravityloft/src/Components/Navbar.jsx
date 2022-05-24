import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/Images/logo.png'
const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`
const Rightdiv = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  padding-left: 7%;
  margin: auto;
`
const Leftdiv = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 7%;
  margin: auto;
`
const Contact = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color:rgba(114, 116, 121, 1);
  margin-right: 2.5%;
  margin-top: 10px;
`
const Login = styled.button`
  width: 130px;
  height: 44px;
  background: rgba(248, 248, 248, 1);
  font-family: 'Work Sans', sans-serif;
  color: rgba(87, 70, 236, 1);
  font-weight: 500;
  font-size: 18px;
  line-height: 21.11px;
  border: 1.5px solid #5746EC;
  border-radius: 7px;
  margin-right: 1.5%;
`
const Register = styled.button`
  width: 130px;
  height: 44px;
  background: rgba(87, 70, 236, 1);
  font-family: 'Work Sans', sans-serif;
  color:rgba(255, 255, 255, 1);
  font-weight: 500;
  font-size: 18px;
  line-height: 21.11px;
  border-radius: 8px;
  border: 0px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`
const Navbar = () => {
  return (
      
    <Container>
        <Rightdiv>
          <img src={logo} alt="" width='43px' height='42px'/>
        </Rightdiv>
        <Leftdiv>
          <Contact>
            Contact Us
          </Contact>
          <Login>
            Login
          </Login>
          <Register>
            Register
          </Register>
        </Leftdiv>
    </Container>
    
  )
}

export default Navbar