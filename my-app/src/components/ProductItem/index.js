import React from 'react';
//  import PropTypes from 'prop-types';

//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LinkButton from '../LinkButton/index';
import { media } from '../../utils/media';
const ProductItemWrapper = styled.div`
  width: 320px;
  height: 220px;
  ${media.tablet`height: 225px;`};
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.background}); /* The image used */
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  font-family: 'Century Gothic';
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(243, 243, 243, 0.22);
  display: flex;
  flex-direction: column;
  font-family: 'Century Gothic';
  ${media.tablet`font-size: 11px;`};
  font-size: 12px;
  opacity: 1;
  ${media.tablet`opacity: 1;
  background: rgba(243, 243, 243, 0.5);`};
  &:hover {
    & > div {
      opacity: 1;
    }
    background: rgba(243, 243, 243, 0.65);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Header = styled.div`
  font-size: 25px;
  margin-left: 25px;
  margin-top: 20px;
  ${media.tablet`font-size: 20px;
  margin-top: 15px;`};
`;

const Description = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 1px;
  opacity: 0;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 6;

    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
    overflow: hidden;
    min-height: 90px;
    max-height: 100px;
    ${media.tablet`
    min-height: 92px;`};
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class ProductItem extends React.Component {
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
      <ProductItemWrapper background={this.props.background}>
        <Overlay>
          <Header dangerouslySetInnerHTML={{ __html: this.props.title }} />
          <Description
            dangerouslySetInnerHTML={{ __html: this.props.description }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5px',
            }}
          >
            <LinkButton to={this.props.to}>Далее</LinkButton>
          </div>
        </Overlay>
      </ProductItemWrapper>
    );
  }
}

export default ProductItem;
