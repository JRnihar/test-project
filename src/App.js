
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Popup from './Components/Pages/Popup';
export const PopupContext = createContext();
export const DataContext = createContext();
export default function App() {
  const [allValues, setAllValues] = useState()
  useEffect(()=>{
    fetch('/data.json').then(res=>res.json()).then(data=>
      setAllValues(data)
      )
  },[])
  return (
    <PopupContext.Provider value={[allValues, setAllValues]}>
     <Popup/>
    </PopupContext.Provider>
  );
}

