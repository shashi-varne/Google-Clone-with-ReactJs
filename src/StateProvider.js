import React, { createContext, useContext, useReducer } from "react";

//Creating contextAPI
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is a hook which allows us to pull info from the data we store in ContextAPI
export const useStateValue = () => useContext(StateContext);
