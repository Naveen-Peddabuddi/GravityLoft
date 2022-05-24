import React from 'react'
import styled from 'styled-components'
import Searchboxsvg from '../Assets/Images/Searchox.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Container = styled.div`
    width: 100%;
    height: 671px;
    /* border: 1px solid red; */
    margin: auto;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 100px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`
const Leftdiv = styled.div`
  width: 40%;
  height: 70%;
  /* border: 1px solid blue; */
  margin: auto;
  margin-left: 5%;
  text-align: left;
`
const Lefth1 = styled.h1`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 71px;
  line-height: 54px;
  background: linear-gradient(92.84deg, #5746EC -34.59%, #F55656 93.19%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-left: 20px;
  margin-bottom: 20px;
`
const Lefth3 = styled.h3`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 54px;
  color: #000000;
  margin-left: 20px;
  margin-bottom: 20px;
`
const Leftpara = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #5C5F62;
  margin-left: 20px;
  margin-bottom: 20px;
`
const Rightdiv = styled.div`
  width: 45%;
  height: 100%;
  background: rgba(87, 70, 236, 1);
  opacity: 0.6;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.06);
  border-radius: 0px 12px 12px 0px; 
`
const Imgdiv = styled.div`
  margin-top: 12%;
`
const Leftgetstarted = styled.span`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #5746EC;
  margin-left: 20px;
  display: flex;
`
const Searchbox = () => {
  return (
    <Container>
        <Leftdiv>
          <Lefth1>
            Search.
          </Lefth1>
          <Lefth3>
            Top Experts with <br />
            advanced search
          </Lefth3>
          <Leftpara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi veniam dolor quo dicta aliquam beatae itaque, nulla rem explicabo. Iure in ea cum, deleniti consectetur esse labore magnam. Error!
          </Leftpara>
          <Leftgetstarted>
            Get started
            <ChevronRightIcon />
          </Leftgetstarted>
        </Leftdiv>
        <Rightdiv>
            <Imgdiv className='App'>
              <img src={Searchboxsvg} alt="" width='90%' height='80%'/>
            </Imgdiv>
        </Rightdiv>
    </Container>
  )
}

export default Searchbox