import {  Button, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import useForm from './read'

const Apipost = () => {
    var [cart, setcart] = useForm([{"id":0,"pname":"","price":"","quantity":"","dispercent":"","total":""}])
 
   const addtocart=()=>{
       console.log(cart);
    
       axios.get("https://reqres.in/api/users")
       .then((response)=>{
            console.log(cart)
        
       })
       axios.post("https://reqres.in/api/users",cart)
       .then((response)=>{
        console.log(response.data);
        alert("Success");
       })
   }


  return (
    <div>
      <TextField name='id' value={cart.id} onChange={setcart}  variant='outlined' fullWidth label='Product ID'></TextField>
      <TextField name='pname' value={cart.pname} onChange={setcart} variant='outlined' fullWidth label='Product Name'></TextField>
      <TextField name='price' value={cart.price} onChange={setcart} variant='outlined' fullWidth label='Price'></TextField>
      <TextField name='quantity' value={cart.quantity} onChange={setcart} variant='outlined' fullWidth label='Quantity'></TextField>
      <TextField name='dispercent' value={cart.dispercent} onChange={setcart} variant='outlined' fullWidth label='Discount Percentage'></TextField>
      <TextField name='totalprice' value={cart.total} onChange={setcart} variant='outlined' fullWidth label='Total Price'></TextField>
      <Button onClick={addtocart} variant='contained' fullWidth>Add to Cart</Button>

    </div>
  )
}

export default Apipost

