import React from 'react';
import styled from 'styled-components';

function Section({ title, description, backgroundImage, leftBtnTxt, rightBtnTxt, color, showArrow}) {
  return (
    <Wrap bgImage={backgroundImage}>
        <ItemText color={color}>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
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
            <DownArrow src='/images/down-arrow.svg' show={showArrow}/>
        </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
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
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 1.875rem;

    @media (max-width: 768px) {
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
`

const Buttons = styled.div``

export default Section