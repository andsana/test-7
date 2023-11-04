import {useState} from 'react';
import AddItems from './Components/AddItem/AddItems';
import Orders from './Components/Order/Orders';
import {MenuItems} from './Constant/MenuItems';
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

  const CalculateTotalPrice = () => {
    return orders.length
      ? orders.reduce((acc, order) => acc + order.count * order.price, 0)
      : 0;
  };

  const ordersList = orders.length > 0
    ? (<Orders orders={orders} removeOrder={removeOrder}/>)
    : (<p>Order is empty! Please add some items</p>);

  return (
    <div className="app col-5 gap-5">
      <div className="col-left col-6 d-flex flex-column">
        <h4 className="mb-3 text-center">Order Details:</h4>
        {ordersList}
        <p className="mt-3 mt-auto">Total prise: <strong>{CalculateTotalPrice()}</strong></p>
      </div>
      <AddItems MenuItems={MenuItems} addOrder={addOrder}/>
    </div>
  );
}

export default App;
