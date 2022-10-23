import React from 'react';
import styled from 'styled-components';

function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>The PrimRose</h1>
            <p>We build innovative modern design & works</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    Shop
                </LeftButton>
                <RightButton>
                    Learn More
                </RightButton>
            </ButtonGroup>
            <DownArrow src='/images/down-arrow.svg' />
        </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, hsla(227, 100%, 98%, .65) 45%, hsla(226, 32%, 92%, .0) 100%),
    url(https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80) no-repeat center center fixed;
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
    padding-top: 15vh;
    text-align: center;
    pointer-events: none;

    & > h1, p {
        color: var(--black);
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 1.875rem;

`

const LeftButton = styled.button`
    background-color: var(--navy);
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
    filter: invert(100%);
`

const Buttons = styled.div``

export default Section