import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [burgerOpen, setburgerOpen] = useState(false);

  return (
    <Container>
        <a href='/'>
            <Logo src="/images/Ezra_Joel_Group_Logo_Dark.png" alt="" />
        </a>

        <Menu>
            <a href="/">About Us</a>
            <a href="/">Services</a>
            <a href="/">Ezra Joel Foundation</a>
            <a href="/">Media</a>
            <a href="/">Contact</a>
        </Menu>

        <RightMenu>
            <RightLinks>
            <a href='/'>Shop</a>
            <a href='/'>Account</a>
            </RightLinks>
            <CustomMenu onClick={() => setburgerOpen(true)} />
        </RightMenu>
        <BurgerNav show={burgerOpen}>
            <CustomClose onClick={() => setburgerOpen(false)}>
                <CloseIcon className='close'/>
            </CustomClose>
            <MainMenuItems><a href='/'>About Us</a></MainMenuItems>
            <MainMenuItems><a href='/'>Services</a></MainMenuItems>
            <MainMenuItems><a href='/'>Ezra Joel Foundation</a></MainMenuItems>
            <MainMenuItems><a href='/'>Media</a></MainMenuItems>
            <MainMenuItems><a href='/'>Contact</a></MainMenuItems>
            <MenuItems><a href='/'>Extra Link 1</a></MenuItems>
            <MenuItems><a href='/'>Extra Link 2</a></MenuItems>
            <MenuItems><a href='/'>Extra Link 3</a></MenuItems>
            <MenuItems><a href='/'>Extra Link 4</a></MenuItems>
        </BurgerNav>
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
    z-index: 100;
`
const Logo = styled.img`
    object-fit: contain;
    flex: 1;
    width: 12em;
    padding-top: 3px;

    @media (max-width: 950px) and (min-width: 568px) {
        width: 10em;
    }
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
const BurgerNav = styled.div`
    position: fixed;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
    right: 0;
    background: var(--offwhite);
    width: 20vw;
    min-width: 280px;
    z-index: 101;
    list-style: none;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;

    &::-webkit-scrollbar {
        display: none;
    }

`
const MenuItems = styled.li`
        text-transform: capitalize;
        text-align: left;
        cursor: pointer;

        & > a {
            padding: 0.33rem 1rem;
            text-transform: capitalize;
            border-radius: 0.25rem;
            transition: background-color 0.5s ease;
        }

        & > a:hover {
            background-color: rgba(57, 60, 65, 0.08);
        }
`
const MainMenuItems = styled(MenuItems)`
    display: none;

    @media(max-width: 1200px){
        display: block;
        
    }
`

const CustomClose = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0.67rem 0rem;
    cursor: pointer;

    & > .close {
        transition: transform 0.5s ease;
    }

    & > .close:hover {
        transform: rotate(180deg);
    }
`

export default Header