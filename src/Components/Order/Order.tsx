import React from 'react';

interface Props {
  name: string;
  count: number;
  price: number;
  removeOrder: () => void;
}

const Order: React.FC<Props> = ({ name, count, price, removeOrder }) => {
  return (
    <div className="d-flex gap-2 mb-3 align-items-center">
      <span>{name}</span>
      <span>X {count}</span>
      <span>{price * count} KGS</span>
      <button className="btn btn-danger" onClick={removeOrder}>Remove</button>
    </div>
  );
};

export default Order;
