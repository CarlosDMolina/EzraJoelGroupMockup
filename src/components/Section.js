import React from 'react';
import styled from 'styled-components';
import { Slide } from "react-awesome-reveal";

function Section({ title, description, backgroundImage, leftBtnTxt, rightBtnTxt, color, showArrow}) {
  return (
    <Wrap bgImage={backgroundImage}>
        <Slide direction="up" fraction='1' triggerOnce={true}>
        <ItemText color={color}>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Slide>
        <Buttons>
            <Slide direction="up" fraction='1' triggerOnce={true}>
            <ButtonGroup>
                <LeftButton color={color}>
                    {leftBtnTxt}
                </LeftButton>
                { rightBtnTxt && 
                    <RightButton>
                        {rightBtnTxt}
                    </RightButton>
                } 
            </ButtonGroup>
            </Slide>
            <DownArrow src='/images/down-arrow.svg' show={showArrow}/>
        </Buttons>
        
    </Wrap>
  )
}

const Wrap = styled.div`
    scroll-snap-align: start end;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, hsla(227, 100%, 98%, 1) 0%, hsla(226, 32%, 92%, .0) 100%),
    ${props => `url(${props.bgImage}) no-repeat center center`}; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 950px) and (min-width: 568px) {
        background: linear-gradient(180deg, hsla(227, 100%, 98%, 0.85) 45%, hsla(226, 32%, 92%, .0) 100%),
    ${props => `url(${props.bgImage}) no-repeat center center`}; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    }
`

const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 15vh;
    width: 67vw;
    text-align: center;
    align-items: center;
    pointer-events: none;

    & > p {
        max-width: 700px;
        width: 50vw;
    }

    & > h1 {
        text-transform: capitalize;
        margin-bottom: 1rem;
        color: ${props => props.color === '' ? 'var(--grey)' : 'var(--' + props.color + ')'};
    }

    @media (max-width: 950px) and (min-width: 568px) {
        padding-top: 20vh;
        width: 85vw;

        & > h1 {
            max-width: 700px;
            font-size: 3.5vw;
        }

        & > p {
            font-size: 14px;
        }
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 1.875rem;

    @media (max-width: 950px) and (min-width: 569px) {
       margin-bottom: 1rem;
    }

    @media (max-width: 568px) {
        flex-direction: column;
    }
`

const LeftButton = styled.button`
    background-color: ${props => props.color === '' ? 'var(--navy)' : 'var(--' + props.color + ')'};
    height: 2.5rem;
    width: 16rem;
    color: var(--offwhite);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    opacity: 0.9;
    text-transform: uppercase;
    font-size: 0.75rem;
    cursor: pointer;
    margin: 0.5rem;
    border: none;
    transition: opacity 0.5s ease;
    

    &:hover {
        opacity: 1;
    }
`

const RightButton = styled(LeftButton)`
    background-color: var(--offwhite);
    opacity: 0.8;
    color: var(--black);
`
const DownArrow = styled.img`
    height: 2.5rem;  
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    filter: invert(75%);
    visibility: ${props => props.show ? 'visible' : 'hidden'};

    @media (max-width: 950px) and (min-width: 568px) {
        display: ${props => props.show ? null : 'none'};
    }
`

const Buttons = styled.div``

export default Section