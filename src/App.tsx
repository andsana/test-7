import {useState} from 'react';
import AddItem from './Components/AddItem/AddItem';
import Order from './Components/Order/Order';
import {MenuItems} from './Constant/MenuItems';
import './App.css';
import type {Character} from './types';


function App() {

  const [orders, setOrders] = useState<Character[]>([]);

  const addOrder = (index: number) => {
    const selectedItem = MenuItems[index];
    const orderExists = orders.find(order => order.name === selectedItem.name);
    if (orderExists) {
      setOrders(prevState =>
        prevState.map(order =>
          order.name === selectedItem.name ? {...order, count: order.count + 1} : order
        )
      );
    } else {
      const newOrder: Character = {name: selectedItem.name, count: 1, price: selectedItem.price};
      setOrders(prevState => [...prevState, newOrder]);
    }
  };

  const removeOrder = (index: number) => {
    setOrders((prevState) => prevState.map((order, i) => {
      if (i === index) {
        return {...order, count: order.count ? order.count - 1 : 0};
      }
      return order;
    }));
  };

  const menuItemsList = MenuItems.map((MenuItem, index) =>
    <AddItem key={index} name={MenuItem.name} price={MenuItem.price} onClickMenu={() => addOrder(index)}/>
  );

  let orderList;

  if (orders.length) {
    orderList = orders.map((order, index) => (
      <Order
        key={index}
        name={order.name}
        count={order.count}
        price={order.price}
        removeOrder={() => removeOrder(index)}
      />
    ));
  } else {
    orderList = 'Order is empty! Please add some items';
  }

  return (
    <div className="app col-6">
      <div className="col-left col-6">
        <h4>Order Details:</h4>
        {orderList}
      </div>

      <div className="col-right col-6">
        <h4>Add items:</h4>
        <div className="add-items d-flex col-12">
          {menuItemsList}
        </div>
      </div>
    </div>
  );
}

export default App;
