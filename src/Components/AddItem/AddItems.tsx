import React from 'react';
import AddItem from './AddItem';
import {MenuItem} from '../../types';

interface Props {
  MenuItems: MenuItem[];
  addOrder: (index: number) => void;
}

const AddItems: React.FC<Props> = (props) => {
  return (
    <div className="col-right col-6">
      <h4 className="mb-3 text-center">Add items:</h4>
      <div className="add-items d-flex justify-content-center">
        {props.MenuItems.map((menuItem, index) => (
          <AddItem
            key={index}
            name={menuItem.name}
            price={menuItem.price}
            onClickMenu={() => props.addOrder(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AddItems;
