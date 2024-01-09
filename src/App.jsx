import { Fragment, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/css/main.css';

import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';

function App() {


//----------- data for MainPage------------------
const [isLoadingSceleton, setIsLoadingSceleton] = useState(true) // прогрузка скелетона
const [itemCard, setItemCard] = useState([]) // хранение массива из бэка

useEffect(()=>{
  fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
    setItemCard(json); 
    setIsLoadingSceleton(false);  
  });
}, []);
//-----------------------------------------------
  
  return<Fragment>
    <Header/>
    <Routes>
      <Route  path='/' element={<MainPage 
        itemCard={itemCard} 
        isLoadingSceleton={isLoadingSceleton}/>
      }/>
      
    </Routes>
  </Fragment>
}

export default App
