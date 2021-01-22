import { useState } from 'react';
import './App.css';
import Header from './Components/Header'
import MenuItems from './Components/MenuItems'
import CartTotal from './Components/CartTotal';
import data from './data.json'

function App() {

  const [ cartItems, setCartItems ] = useState(data);

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className="app__menu">
        <MenuItems items={cartItems} setCartItems={setCartItems} />
        <CartTotal items={cartItems} />
      </div>
    </div>
  );
}

export default App;
