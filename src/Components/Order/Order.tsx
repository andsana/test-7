import React from 'react';

interface Props {
  name: string;
  count: number;
  price: number;
  removeOrder: () => void;
}

const Order: React.FC<Props> = ({ name, count, price, removeOrder }) => {
  return (
    <div>
      <span>{name}</span>
      <span>X {count}</span>
      <span>{price * count} KGS</span>
      <button onClick={removeOrder}>Remove</button>
    </div>
  );
};

export default Order;
