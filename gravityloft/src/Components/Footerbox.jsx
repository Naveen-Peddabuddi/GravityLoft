import React from 'react'
import styled from 'styled-components'
import ContactUs from './ContactUs'
import logo from '../Assets/Images/logo.png'
const Container = styled.div`
    width: 70%;
    height: 891px;
    margin: auto;
    /* border: 1px solid yellow; */
`
const Footer = styled.div`
    width: 100%;
    height: 483px;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const Leftdiv = styled.div`
  width: 30%;
  /* border: 1px solid blue; */
  height: 30%;
  margin: auto;
  margin-left: 0px;
`
const Footpara = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #5C5F62;
`
const Rightdiv = styled.div`
  width: 50%;
  height: 40%;
  /* border: 1px solid red; */
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-right: 0px;
`
const RightHead = styled.h3`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 21px;
  color: #012333;
`
const Rightlists = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.204545px;
  color: #5C5F62;
`
const Headdivs = styled.div`
  width: 30%;
  height: 100%;
  /* border: 1px solid red; */
`
const Footerbox = () => {
  return (
    <Container>
        <ContactUs />
        <Footer>
            <Leftdiv>
                <img src={logo} alt="" width='10%'height='30%'/>
                <Footpara>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptas architecto repellat sed aut inventore eveniet a expedita minima rerum praesentium, magni, vel reprehenderit illo?
                </Footpara>
            </Leftdiv>
            <Rightdiv>
                <Headdivs>
                    <RightHead>
                      Account
                    </RightHead>
                    
                      <Rightlists>
                        Login
                      </Rightlists>

                      <Rightlists>
                        Signup
                      </Rightlists>
                    
                </Headdivs>
                <Headdivs>
                      <RightHead>
                    Company
                    </RightHead>
                    <Rightlists>
                      Privacy Policy
                    </Rightlists>
                    <Rightlists>
                      Terms of use
                    </Rightlists>
                    <Rightlists>
                      Compliance
                    </Rightlists>
                </Headdivs>
                <Headdivs>
                  <RightHead>
                    Support
                  </RightHead>
                  <Rightlists>
                    Contact Us
                  </Rightlists>
                  <Rightlists>
                    FAQ
                  </Rightlists>
                </Headdivs>
            </Rightdiv>
        </Footer>
        <hr />
        <Rightlists className='App'>
        Copyright © 2022 by Techrefic
        </Rightlists>
    </Container>
  )
}

export default Footerbox