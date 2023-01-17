import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Index from '../pages/Index';
import ItemShow from '../pages/ItemShow';
import Wanted from '../pages/Wanted';

function Main(props) {

  const [items, setItems] = useState(null)
  const URL= "http://mercantile.herokuapp.com/"

  const getItems = async() => {
    const response = await fetch(URL+'items');
    const data = await response.json();
    setItems(data);
  }

  const createItem = async(item) => {
    //make post request to create item
    await fetch(URL + "items", {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(item),
    });
    //update list of people
    getItems();
  }

  useEffect(()=>{
    getItems();
  },[])

     
  return (
    <main>
      <Routes>
        <Route 
          path="/" 
          element={<Index items={items} createItem={createItem}/>} 
        />

        <Route 
          path="/items/:id"
          element={<ItemShow />}
        /> 

        <Route path="/wanted" element={<Wanted />}/>
      </Routes>
    </main>
  );
}
    
export default Main;