import { Fragment, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/css/main.css';

import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';

function App() {
const [searchValue, SetSearchValue] = useState('');

  return<Fragment>
    <Header searchValue={searchValue} SetSearchValue={SetSearchValue}/>
    <Routes>
      <Route path='/' element={<MainPage searchValue={searchValue}/> }/>

    </Routes>
  </Fragment>
}

export default App
