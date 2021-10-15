import React from 'react'
import {useState} from 'react'



export default function Addbook() {


  const [bookData,setBookData] =useState({name:'' ,categoryId:'0'})

  const categories=[
    {
       id:1,
       label:"tintin"
    },

    {
      id:1,
      label:"BD"
   },
  ]

  const handleChange =(event) =>{
    let currentState ={...bookData}
   currentState[event.target.name]=event.target.value
   setBookData(currentState)
    }

  const onSubmit =(event) =>{
  event.preventDefault();
    console.log(bookData);
  }


  
      return(
  <div> 
      <div style={{display:"flex",justifyContent:"center",position:"relative"}}>
        <h1 style={{fontSize:"30px",position:"absolute",top:"30px"}}>Ajouter un livre</h1>
<form style={{width:"50%",marginLeft:"50px",position:"absolute",top:"60px"}}   onSubmit={onSubmit}> 
    <div>
        <label>Nom du livre</label>
        <input type="text" name="name" className="form-control"  onChange={handleChange} required></input></div>
<div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Categorie du livre</label>
    <select  name="categoryId" className="form-control" id="exampleFormControlSelect1" onChange={handleChange}>
      {categories.map(categorie =>(
      <option value={categorie.id}> {categorie.label}</option>
      ))}
    </select>
  </div>
  <div style={{display:"flex",justifyContent:"flex-start"}}> 
      <button type="submit" value="valider" className="btn btn-primary btn-sm btn-block"style={{marginTop:"20px",width:"100%"}}>Ajouter</button>
     </div>
      </form>

  </div></div>



    
    )}
 