import  { useEffect,useContext } from 'react'
import "./App.css";
import { auth } from "./Components/Utils/firebase";
import {onAuthStateChanged} from 'firebase/auth'
import {dataContext} from './Components/DataProvider/DataProvider'
import { Type } from './Components/Utils/action.type';
import Router from './Router';

const App = () => {
  
  const [state,dispatch] =useContext(dataContext)


useEffect(()=>{
onAuthStateChanged(auth,(authUser)=>{
  if (authUser) {
    // console.log(authUser)
    dispatch({
      type: Type.ADD_USER,
      item: authUser,
    });

  } else {
    dispatch({
      type: Type.ADD_USER,
      item: null,
    });
  }
})


},[])
  return (
    <>
    <Router/>
    </>
  )
}

export default App