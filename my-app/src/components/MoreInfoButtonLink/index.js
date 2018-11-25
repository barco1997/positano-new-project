/**
 *
 * SendButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-color: #977c7c;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  background: ${props => (props.background ? props.background : 'white')};
  color: ${props => (props.color ? props.color : 'black')};
  border-radius: 30px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  transition: background 300ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.31);
  }
  & > * {
    margin-top: -4px;
  }
`;

const MoreInfoButtonLink = ({ children, background, to, color }) => (
  <Button to={to} background={background} color={color}>
    {children}
  </Button>
);

MoreInfoButtonLink.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default MoreInfoButtonLink;
