import React from 'react'
import Item from '../components/Item'
import {useState} from'react';
import {Link} from 'react-router-dom'

function Index(props) {

  const formFields = {
    name: '',
    condition: '',
  };

  //state to hold formData
  const [newForm, setNewForm] = useState(formFields);

  //handleChange function for form
  const handleChange = (event) => {
    setNewForm({...newForm, [event.target.name]: event.target.value})
  };

  //handleSubmit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createItem(newForm);
    setNewForm(formFields)
  };

  //loaded function
  const loaded = () => {
    return props.items.map(item => (
      <div key={item._id}>
        <Link to={`/items/${item._id}`}>
          <h1>{item.name}</h1>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>
  };

  console.log(props)
  let frontPageItems=[]
  // for (let item of props.items){

  //   frontPageItems.push(<Item item={item}/>)
  // }

  return (
    <div className='container'>
      {frontPageItems}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newForm.name}
          name='name'
          placeholder='name'
          onChange={handleChange}
        />
        <input
          type='text'
          value={newForm.condition}
          name='condition'
          placeholder='condition'
          onChange={handleChange}
        />
        <input type='submit' value='create item' />
      </form>
      {props.people ? loaded() :loading()}
    </div>
  )
}

export default Index