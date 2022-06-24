import {useRef} from 'react';
import {useScroll} from "../Hooks/useScroll";

import styled, {keyframes} from "styled-components";

const NaviHeader = styled.section`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
`;

const NaviContainer = styled.div`
  min-height: 8vh;
  transition: .3s ease background-color;
  max-width: initial;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  padding: 0 10px;
  @media ${(props) => props.theme.desktop} {
    width: initial;
  }
`;

const NavLink = styled.a`
  &::after {
    content: attr(data-after);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: var(--high);
    font-size: 13rem;
    letter-spacing: 50px;
    z-index: -1;
    transition: .3s ease letter-spacing;
    @media ${(props) => props.theme.desktop} {
      display: none;
    }
  }

  @media ${(props) => props.theme.desktop} {
    font-size: 1.7rem;
  }
`;

const NavLi = styled.li`
  &:hover {
    ${NavLink}::after {
      transform: translate(-50%, -50%) scale(1);
      letter-spacing: initial;
    }
    ${NavLink}{
      color: crimson;  
    }
  }
  
  ${NavLink}{
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: .2rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    padding: 20px;
    display: block;
  }

  @media ${(props) => props.theme.desktop} {
    display: inline-block;
  }
`;

const NavUl = styled.ul`
  list-style: none;
  position: absolute;
  background-color: var(--high);
  width: 100vw;
  height: 100vh;
  left: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow-x: hidden;
  transition: .5s ease left;

  &.active {
    left: 0;
  }

  @media ${(props) => props.theme.desktop} {
    position: ${'initial'};
    display: block;
    height: auto;
    width: fit-content;
    background-color: transparent;
  }
`;

const TopButton = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  font-size: 1.2rem;
  border: 1px black solid;
  border-radius: 10px;
  text-align: center;
  line-height: 48px;
  background-color: var(--high);
  color: var(--low);
`;

const Bar = styled.div`
  height: 2px;
  width: 30px;
  position: relative;
  background-color: white;
  z-index: -1;

  &::before, &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: white;
    transition: .3s ease;
    transition-property: top, bottom;
  }

  &::before {
    bottom: 8px;
  }

  &::after {
    top: 8px;
  }
`;

const hamburger_puls = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
`;

const Hamburger = styled.div`
  height: 60px;
  width: 60px;
  display: inline-block;
  border: 3px solid white;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  cursor: pointer;
  transform: scale(.8);
  margin-right: 20px;

  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 3px solid white;
    animation: ${hamburger_puls} 1s ease infinite;
  }

  &.active {
    ${Bar}::after, ${Bar}::before {
      top: 0;
      bottom: 0;
    }
  }

  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

const Navi = () => {

  const scroll = useScroll();

  const hamburger = useRef();
  const mobile_menu = useRef();

  const onMenuClick = () => {
    hamburger.current.classList.toggle('active');
    mobile_menu.current.classList.toggle('active');
  }

  const useStyle1 = (location) => {
    if (location.y > 150) return {backgroundColor: "#02343F"};
    else return {backgroundColor: "transparent"}
  }

  const useStyle2 = (location) => {
    if (location.y > 150) return {display: "inherit"};
    else return {display: "none"}
  }

  return <NaviHeader id="header">
    <NaviContainer className="header container" style={useStyle1(scroll)}>

      <NavBar className="nav-bar">
        <div/>
        <div className="nav-list">
          <Hamburger className="hamburger" ref={hamburger} onClick={() => {
            hamburger.current.classList.toggle('active');
            mobile_menu.current.classList.toggle('active');
          }
          }>
            <Bar className="bar"></Bar>
          </Hamburger>
          <NavUl ref={mobile_menu}>
            <NavLi><NavLink onClick={onMenuClick} href="#main" data-after="Home">Home</NavLink></NavLi>
            <NavLi><NavLink onClick={onMenuClick} href="#skill" data-after="skill">skill</NavLink></NavLi>
            <NavLi><NavLink onClick={onMenuClick} href="#hobby" data-after="hobby">hobby</NavLink></NavLi>
            <NavLi><NavLink onClick={onMenuClick} href="#contact" data-after="contact">contact</NavLink></NavLi>
          </NavUl>
        </div>
      </NavBar>
    </NaviContainer>
    <a href='#main'>
      <TopButton className="topButton" style={useStyle2(scroll)}>
        TOP
      </TopButton>
    </a>
  </NaviHeader>
}

export default Navi;