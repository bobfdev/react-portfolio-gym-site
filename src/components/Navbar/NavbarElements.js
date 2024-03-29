import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1600px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-right: 400px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 1180px) {
        margin-right: 60px;
    }

    @media screen and (max-width: 768px) {
        margin-right: 0px;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -250px;

    @media screen and (max-width: 1400px) {
        margin-right: -200px;
    }

    @media screen and (max-width: 1300px) {
        margin-right: -100px;
    }

    @media screen and (max-width: 1200px) {
        margin-right: 0px;
    }

    @media screen and (max-width: 1024px) {
        margin-right: 5px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #f9032f;
    }

    &.active {
        border-bottom: 3px solid #f9032f;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    margin-left: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #f9032f;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`