import React from 'react'
import Book from './Book'
import {Link} from "react-router-dom"

export default class ListBooks extends React.Component {
  
    constructor(){
        super();
         this.state={
             Books : [ ]
         }}

    componentDidMount() {
        this.setState({Books:[ 
               {
                 title:"tintin",  category : "BD",
               
               },
               {
                title:"asterix",  category : "BD",
              
              },
              {
                title:"asterix",   category : "BD",
           
              },
               ]}) 
       
        }
 
  
     render() {
   
        return <div>
 <h1>Mes Livres disponibles</h1>
 {this.state.Books.map(book =>(<div style={{marginBottom:"10px"}}><Book title={book.title} category={book.category}/>
</div>))}
<div style={{fontSize:"12px"}}>
<button>Emprunter</button>
<Link  to="/Addbook"><button className="btn btn-primay btn-sm">Nouveau Livre</button></Link></div>
</div>


}}
