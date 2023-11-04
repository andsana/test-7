import {useState} from 'react';
import {MenuItems} from './Constant/MenuItems';
import Order from './Components/Order/Order';
import AddItems from "./Components/AddItem/AddItems";
import type {Character} from './types';
import './App.css';

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

  const CalculateTotalPrice = () => {
    return  orders.length
      ? orders.reduce((acc, order) => acc + order.count * order.price, 0)
      : 0;
  };

  return (
    <div className="app col-5 gap-5">
      <div className="col-left col-6 d-flex flex-column">
        <h4 className="mb-3 text-center">Order Details:</h4>
        {orderList}
        <p className="mt-3 mt-auto">Total prise: <strong>{CalculateTotalPrice()}</strong></p>
      </div>
        <AddItems MenuItems={MenuItems} addOrder={addOrder}/>
    </div>
  );
}

export default App;
