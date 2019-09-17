import React, { FunctionComponent, useState, useMemo } from 'react';
import styled from 'styled-components';

type OrderProps = {
  value: string;
  // Todo type
  onChange: any;
}

const OrderSelect = styled.select`
  height: 40px;
  padding: 5px;
`;

const Order: FunctionComponent<OrderProps> = ({ value, onChange }) => {
  return (
    <OrderSelect value={value} onChange={onChange}>
      <option value="desc">Recent</option>
      <option value="asc">Older</option>
    </OrderSelect>
  );
};

export default Order;