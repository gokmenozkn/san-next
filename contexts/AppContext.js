import React, { createContext, useContext, useState, useReducer } from 'react';
// import initialstate from "./state";
import reducer from './reducer';

export const AppContext = createContext();

const initialState = {
  cart: []
}

export default function AppProvider({children}) {
  // const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}