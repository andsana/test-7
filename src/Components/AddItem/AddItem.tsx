import React from 'react';

interface Props {
  name: string;
  price: number;
  onClickMenu: React.MouseEventHandler;
}

const AddItem: React.FC<Props> = ({name, price, onClickMenu}) => {
  return (
    <button onClick={onClickMenu}>
      <strong className="d-block">{name}</strong>
      Price: {price} KGS
    </button>
  );
};

export default AddItem;