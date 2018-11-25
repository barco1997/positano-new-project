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
import image1 from './image1.svg';
import image2 from './image2.svg';
import image3 from './image3.svg';
import image4 from './image4.svg';
import image5 from './image5.svg';
import image6 from './image6.svg';

const NavBarWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #eee7e1;

  font-family: 'Century Gothic';
  border-style: ${props => (props.color ? 'none' : 'solid')};
  border-width: 0px 0px 1px 0px;
  border-color: #eee7e1;
  ${media.tablet`height: 60px;`};
`;

const Menu = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  font-size: 13px;
  margin: 0px -15px;
  ${media.tablet`margin: 0px -10px;`};
  & > * {
    ${media.tablet`margin: 0px 10px;`};
  }
`;

const NavMenuItem = styled.div`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: ${props => (props.active ? '0px' : '4px')};
  padding-top: ${props => (props.active ? '0px' : '2px')};
  align-items: center;

  &:hover > div {
    font-size: 15px;
    ${media.tablet`font-size: 8px;`};
  }
  & > div {
    font-size: ${props => props.active && '15px'};
    ${media.tablet`font-size: 8px;`};
  }
  &:hover > img {
    width: 50px;
    ${media.tablet`width: 25px;`};
  }
  & > img {
    width: ${props => props.active && '50px'};
    ${media.tablet`width: 25px;`};
  }
  &:hover {
    padding-bottom: 0px;
    padding-top: 0px;
  }
`;

const MenuImg = styled.img`
  margin-top: 3px;
  width: 46px;
  ${media.tablet`width: 22px;`};
`;

const MenuText = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  ${media.tablet`font-size: 6px;`};
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
          <NavMenuItem
            onClick={() => {
              this.props.action(0);
            }}
            active={this.props.active === 0}
          >
            <MenuImg src={image1} alt="image" />
            <MenuText>Сантехника</MenuText>
          </NavMenuItem>
          <NavMenuItem
            onClick={() => {
              this.props.action(1);
            }}
            active={this.props.active === 1}
          >
            <MenuImg src={image2} alt="image" />
            <MenuText>Плитка</MenuText>
          </NavMenuItem>
          <NavMenuItem
            onClick={() => {
              this.props.action(2);
            }}
            active={this.props.active === 2}
          >
            <MenuImg src={image3} alt="image" />
            <MenuText>Паркет</MenuText>
          </NavMenuItem>
          <NavMenuItem
            onClick={() => {
              this.props.action(3);
            }}
            active={this.props.active === 3}
          >
            <MenuImg src={image4} alt="image" />
            <MenuText>Мебель</MenuText>
          </NavMenuItem>
          <NavMenuItem
            onClick={() => {
              this.props.action(4);
            }}
            active={this.props.active === 4}
          >
            <MenuImg src={image5} alt="image" />
            <MenuText>Кухни</MenuText>
          </NavMenuItem>
          <NavMenuItem
            onClick={() => {
              this.props.action(5);
            }}
            active={this.props.active === 5}
          >
            <MenuImg src={image6} alt="image" />
            <MenuText>Свет</MenuText>
          </NavMenuItem>
        </Menu>
      </NavBarWrapper>
    );
  }
}

export default ProductsBar;
