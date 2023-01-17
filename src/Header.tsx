import { useContext, useState } from "react";
import styled from "styled-components";
import { TimerContext } from "./App";
import { MenuIcon } from "./menu";

const NavBar = styled.nav`
  background-color: ${props => props.theme.backgroundLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 1rem;
`;
const NavBarClose = styled.span`
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
const NavItems = styled.ul<{ visible: boolean }>`
  list-style: none;
  margin: 0;
  position: fixed;
  height: 100%;
  width: 300px;
  top: 0;
  transition: right 0.4s;
  right: ${props => (props.visible ? 0 : "-100%")};
  background-color: ${props => props.theme.backgroundLight};
  padding: 0;
  max-width: 100%;
  @media (min-width: 768px) {
    display: flex;
    position: static;
    width: auto;
    height: auto;
    transform: none;
    background-color: transparent;
  }
`;
const NavItem = styled.li`
  text-align: center;
  padding: 1rem;
  font-weight: bold;
`;
const Logo = styled.div`
  font-size: 22px;
`;
const NavBarToggle = styled.span`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Header = ({ visible }: { visible: boolean }): JSX.Element => {
  const [navVisible, setNavVisible] = useState(visible);
  const timerContext = useContext(TimerContext);

  const toggleNavBar = () => {
    setNavVisible(!navVisible);
  };

  return (
    <NavBar>
      <Logo>Logo</Logo>
      <NavBarToggle onClick={() => toggleNavBar()}>
        <MenuIcon />
      </NavBarToggle>
      <NavItems visible={navVisible}>
        <NavBarClose onClick={() => toggleNavBar()}>X</NavBarClose>
        <NavItem>{timerContext.timeLeft}</NavItem>
      </NavItems>
    </NavBar>
  );
};
