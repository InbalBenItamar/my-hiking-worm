import React from 'react';
import styled from 'styled-components';
import img from './assets/public-lp-bg.jpg';
import {TransparentNavBtn, BtnsAggregation} from '../stylesLibrary/buttons';

const BackgroundImage = styled.div`
    border: 1px solid #000;
    background-image: url(${img});
    width: 100vw;
    height: 100vh;
    background-size: cover;  
    overflow: hidden;
`;


const Title = styled.h1`
  font-size: 48px;
  text-align: left;
  color: #fff;
  padding: 60px
`;

const Hidden = styled.div`
    display: none;
`;
const handleClick = () => console.log("Working on it :)");

const PublicLandingPage = () =>
    <BackgroundImage>
        <Hidden src={img}/>
        <Title>My Hiking Worm</Title>
        <BtnsAggregation>
            <TransparentNavBtn onClick={handleClick}>Sign Up</TransparentNavBtn>
            <TransparentNavBtn onClick={handleClick}>Sign In</TransparentNavBtn>
            <TransparentNavBtn onClick={handleClick}>Contact</TransparentNavBtn>
        </BtnsAggregation>
    </BackgroundImage>
;

export default PublicLandingPage

