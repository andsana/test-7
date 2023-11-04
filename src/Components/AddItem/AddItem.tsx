import React from 'react';

interface Props {
  name: string;
  price: number;
  onClickMenu: React.MouseEventHandler;
}

const AddItem: React.FC<Props> = ({name, price, onClickMenu}) => {
  return (
    <button className="card mb-3 btn btn-success"  style={{ width: "150px" }} onClick={onClickMenu}>
      <strong className="d-block">{name}</strong>
      Price: {price} KGS
    </button>

  );
};

export default AddItem;