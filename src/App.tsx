import AddItem from './Components/AddItem/AddItem';

function App() {

  const addOrder = () => {
    console.log('Click');
  };

  return (
    <div className="container">
      <AddItem name="Cola" price={40} onClickMenu={addOrder}/>
    </div>
);
}

export default App;
