/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';

//  import SendButton from 'components/SendButton';
//  import EyelandTagBlock from 'components/EyelandTagBlock';
//  import SocialTagBlock from 'components/SocialTagBlock';
//  import TagInputField from 'components/TagInputField';
//  import AttachIconButton from 'components/AttachIconButton';
//  import SocialInput from 'components/SocialInput';
//  import PlaceMap from 'containers/PlaceMap';
//  import {
//    withStyles,
//    MuiThemeProvider,
//    createMuiTheme,
//  } from '@material-ui/core/styles';
//  import TextField from '@material-ui/core/TextField';
//  import Grid from '@material-ui/core/Grid';
//  import ChipInput from 'material-ui-chip-input';
//  import { withFormik } from 'formik';
//  import * as Yup from 'yup';
//  import CouponCard from 'components/CouponCard';
//  import CouponHistory from '../../components/CouponHistory';
//  import GoodHistory from '../../components/GoodHistory';
// import messages from './messages';
import { Link } from 'react-router-dom';

const NavBarWrapper = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${props => (props.color ? props.color : 'white')};

  font-family: 'Century Gothic';
  border-style: ${props => (props.color ? 'none' : 'solid')};
  border-width: 0px 0px 1px 0px;
  border-color: #eee7e1;
`;

const Logo = styled(Link)`
  font-size: 25px;
  text-decoration: none;
  color: black;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  margin: 0px -15px;
  & > * {
    margin: 0px 15px;
  }
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: black;
`;

/* eslint-disable react/prefer-stateless-function */
export class NavBar extends React.Component {
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
        <Logo to="/">ПОЗИТАНО</Logo>
        <Menu>
          <MenuItem to="/">О компании</MenuItem>
          <MenuItem to="/">Продукция</MenuItem>
          <MenuItem to="/contacts">Контакты</MenuItem>
        </Menu>
      </NavBarWrapper>
    );
  }
}

export default NavBar;
