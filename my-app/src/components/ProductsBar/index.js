/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
//  import Drawer from 'react-motion-drawer';
import { media } from '../../utils/media';
//  import MenuWrapper from '../MenuWrapper/index';
//  import MenuItem from '../MenuItem/index';

import { Link } from 'react-router-dom';

const NavBarWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #eee7e1;

  font-family: 'Century Gothic';
  border-style: ${props => (props.color ? 'none' : 'solid')};
  border-width: 0px 0px 1px 0px;
  border-color: #eee7e1;
`;

const Menu = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  margin: 0px -15px;
  & > * {
    margin: 0px 15px;
  }
`;

const NavMenuItem = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex: 1;
  justify-content: center;
  ${media.desktop`display: none;`};
`;

/* eslint-disable react/prefer-stateless-function */
export class ProductsBar extends React.Component {
  //  constructor(props, context) {
  //  super(props, context);
  //    this.state = {
  //    id: this.getId(),
  //  };
  //  this.getId = this.getId.bind(this);
  //}

  //getId() {
  // const currentLocation = this.props.location.pathname.slice(14);
  // return currentLocation;
  //}
  render() {
    return (
      <NavBarWrapper color={this.props.color}>
        <Menu>
          <NavMenuItem to="/main">Сантехника</NavMenuItem>
          <NavMenuItem to="/main">Плитка</NavMenuItem>
          <NavMenuItem to="/main">Паркет</NavMenuItem>
          <NavMenuItem to="/main">Мебель</NavMenuItem>
          <NavMenuItem to="/main">Кухни</NavMenuItem>
          <NavMenuItem to="/main">Свет</NavMenuItem>
        </Menu>
      </NavBarWrapper>
    );
  }
}

export default ProductsBar;
