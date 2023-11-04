import React from 'react';
import Order from './Order';
import {Character} from '../../types';

interface Props {
  orders: Character[];
  removeOrder: (index: number) => void;
}

const Orders: React.FC<Props> = ({orders, removeOrder}) => {
  return (
    <div>
      {orders.map((order, index) => (
        <Order
          key={index}
          name={order.name}
          count={order.count}
          price={order.price}
          removeOrder={() => removeOrder(index)}
        />
      ))}
    </div>
  );
};

export default Orders;
