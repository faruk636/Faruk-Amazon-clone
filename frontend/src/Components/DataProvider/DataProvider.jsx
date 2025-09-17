import { createContext, useReducer } from "react"



export const dataContext =createContext();

const DataProvider = ({children,reducer,initialState}) => {
  return (
    <dataContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </dataContext.Provider>
  )
}

export default DataProvider