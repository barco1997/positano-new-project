import React from 'react';
import styled from 'styled-components';

const ProductItemWrapper = styled.div`
  width: 380;
  height: 240px;
  display: flex;
  flex-direction: column;

  font-family: 'Century Gothic';
`;

/* eslint-disable react/prefer-stateless-function */
export class ProductItem extends React.Component {
  render() {
    return <ProductItemWrapper />;
  }
}

export default ProductItem;
