import { Fragment, useEffect, useState } from 'react';
import './assets/css/main.css';
import Header from './components/header/Header';
import MainPage from './pages/mainPages/MainPage';

function App() {


//----------- data for MainPage------------------
const [itemCard, setItemCard] = useState([])

useEffect(()=>{
  fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
    setItemCard(json);   
  });
}, []);
console.log(itemCard)

//-----------------------------------------------
  
  return<Fragment>
    <Header/>
    <MainPage/>
  </Fragment>
}

export default App
