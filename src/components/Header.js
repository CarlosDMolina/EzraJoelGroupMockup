import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
        <a href='#'>
            <Logo src="/images/Ezra_Joel_Group_Logo_Dark.png" alt="" />
        </a>

        <Menu>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Ezra Joel Foundation</a>
            <a href="#">Media</a>
            <a href="#">Contact</a>
        </Menu>

        <RightMenu>
            <RightLinks>
            <a href='#'>Shop</a>
            <a href='#'>Account</a>
            </RightLinks>
            <CustomMenu />
        </RightMenu>
    </Container>
  )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`
const Logo = styled.img`
    object-fit: contain;
    flex: 1;
    width: 12em;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > a {
        padding: 0.33rem 1rem;
        text-transform: capitalize;
        border-radius: 0.25rem;
        transition: background-color 0.5s ease;
    }

    & > a:hover{
        background-color: rgba(57, 60, 65, 0.08);
    }

    @media(max-width: 1200px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

const RightLinks = styled.div`

    a {
        padding: 0.33rem 1rem;
        text-transform: capitalize;
        border-radius: 0.25rem;
        transition: background-color 0.5s ease;
        
    }
    a:hover{
        background-color: rgba(57, 60, 65, 0.08);
    }
    

    @media(max-width: 1200px){
        display: none;
    }
`

const CustomMenu = styled(MenuIcon)`
    margin-left: 1rem;
    cursor: pointer;
`

export default Header