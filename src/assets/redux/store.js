import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/filterSlices'
// import rootReducer from './reducers';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  } ,
});

export default store;