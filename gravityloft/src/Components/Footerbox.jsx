import React from 'react'
import styled from 'styled-components'
import ContactUs from './ContactUs'
import logo from '../Assets/Images/logo.png'
const Container = styled.div`
    width: 70%;
    height: 100vh;
    margin: auto;
`
const Footer = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const Leftdiv = styled.div`
  width: 30%;
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
  @media screen and (max-width: 1378px) {
  font-size: 19px;
  line-height: 24px;
}
@media screen and (max-width: 1245px) {
  font-size: 17px;
  line-height: 23px;
}
@media screen and (max-width: 1115px) {
  font-size: 15px;
  line-height: 22px;
}
@media screen and (max-width: 995px) {
  font-size: 13px;
  line-height: 21px;
}
@media screen and (max-width: 870px) {
  font-size: 12px;
  line-height: 20px;
}
@media screen and (max-width: 750px) {
  font-size: 11px;
  line-height: 19px;
}
@media screen and (max-width: 635px) {
  font-size: 10px;
  line-height: 18px;
}
@media screen and (min-width: 1378px) {
  font-size: 20px; 
  line-height: 25px;
}
`
const Rightdiv = styled.div`
  width: 50%;
  height: 40%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-right: 0px;
`
const RightHead = styled.h3`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  color: #012333;
  @media screen and (max-width: 1378px) {
  font-size: 23px;
  line-height: 20px;
}
@media screen and (max-width: 1245px) {
  font-size: 21px;
  line-height: 19px;
}
@media screen and (max-width: 1115px) {
  font-size: 19px;
  line-height: 18px;
}
@media screen and (max-width: 995px) {
  font-size: 17px;
  line-height: 17px;
}
@media screen and (max-width: 870px) {
  font-size: 16px;
  line-height: 16px;
}
@media screen and (max-width: 750px) {
  font-size: 15px;
  line-height: 15px;
}
@media screen and (max-width: 635px) {
  font-size: 14px;
  line-height: 15px;
}
@media screen and (min-width: 1378px) {
  font-size: 24px; 
  line-height: 21px;
}
`
const Rightlists = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.204545px;
  color: #5C5F62;
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
const Headdivs = styled.div`
  width: 30%;
  height: 100%;
`
const Footerbox = () => {
  return (
    <Container>
        <ContactUs />
        <Footer>
            <Leftdiv>
                <img src={logo} alt="" width='12%'height='30%'/>
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
        <Rightlists className='App' style={{paddingBottom: '50px'}}>
        Copyright © 2022 by Techrefic
        </Rightlists>
    </Container>
  )
}

export default Footerbox