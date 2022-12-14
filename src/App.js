
import { createContext, useEffect, useState } from 'react';
import './App.css';
import PopupList from './Components/Pages/listAllPopup/PopupList';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Regestation from './Components/Authentication/Regestation';
import Header from './Components/Pages/Navbar/Header';
import RequireAuth from './Components/Authentication/RequireAuth';
import ShowDetails from './Components/Pages/singlePopup/ShowDetails';
import CreateList from './Components/CreateList/CreateList';
import UpdateList from './Components/CreateList/UpdateList';


export const PopupContext = createContext();
export const DataContext = createContext();
export default function App() {
  const [allValues, setAllValues] = useState()
  useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(data =>
      setAllValues(data)
    )
  }, [])
  return (
    
      <PopupContext.Provider value={[allValues, setAllValues]}>
        <Header />
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <PopupList />
            </RequireAuth>} />
          <Route path="/:Id" element={
            <RequireAuth>
              <ShowDetails />
            </RequireAuth>} />

          <Route path="allList" element={
            <RequireAuth>
              <CreateList />
            </RequireAuth>
          } />
          <Route path="allList/:Id" element={
            <RequireAuth>
              <UpdateList />
            </RequireAuth>
          } />
          <Route path="login" element={<Login />} />
          <Route path="reg" element={<Regestation />} />
        </Routes>
      </PopupContext.Provider>
    
  );
}

