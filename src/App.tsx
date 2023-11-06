import React from 'react';
import './App.css';
import styled from "styled-components";
import imgSrc from './Rectangle1.png';
import {StyleBtn } from './components/Button.styled';

function App() {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="App">
            <Box>
                <CardItem>
                    <ImgItem src={imgSrc}
                             alt=""
                             role="presentation"
                             width={280}
                             height={170}>
                    </ImgItem>
                    <TitleItem>
                        Headline
                    </TitleItem>
                    <TextItem>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie ornare in venen.
                    </TextItem>

                    {/* eslint-disable-next-line react/jsx-no-undef */}
                        <StyleBtn color={'#f1eded'}><p>See more</p></StyleBtn>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                        <StyleBtn color={'#f1eded'}><p>Save</p></StyleBtn>

                </CardItem>
            </Box>
        </div>
    );
}

export default App;




const TextItem = styled.p`
  margin-left: 20px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  max-width: 260px;
  color: #ABB3BA;
`


const TitleItem = styled.div`
  margin-left: 20px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
`

const ImgItem = styled.img`
  margin: 10px;
`

const CardItem = styled.div`
  height: 350px;
  width: 300px;
  background-color: #f1eded;
  box-shadow: rgb(190, 183, 183) 0 0 30px;
  border-radius: 15px;

`


const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 55px;
  }
`