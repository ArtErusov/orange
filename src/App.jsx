import { Fragment, createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/css/main.css';

import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';

export const SearchContext = createContext();

function App() {

const [searchValue, SetSearchValue] = useState('');

  return<Fragment>
    <SearchContext.Provider value={{searchValue, SetSearchValue}}>
      <Header/>
    

      <Routes>
        <Route path='/' element={<MainPage searchValue={searchValue}/> }/>

      </Routes>
    </SearchContext.Provider>
  </Fragment>
}

export default App;
