import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' activestyle="true">
            Sobre
          </NavLink>
          <NavLink to='/formacao' activestyle="true">
            Formação
          </NavLink>
          <NavLink to='/experiencias-profissionais' activestyle="true">
            Experiências Profissionais
          </NavLink>
          <NavLink to='/projetos' activestyle="true">
            Projetos
          </NavLink>
          <NavLink to='/eventos' activestyle="true">
            Eventos
          </NavLink>
          <NavLink to='/patentes' activestyle="true">
            Patentes
          </NavLink>
          <NavLink to='/analise-em-tempo-real' activestyle="true">
            Análise do Site
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
