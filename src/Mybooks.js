import React from 'react'
import Book from "./Book"
import {Link} from  "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

export default class Mybooks extends React.Component {
          

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
                title:"asterix",   category : "BD",
             
              },
             
               ]}) 
       
        }
 
  
     render() {
   
        return <div>
 <h1>Mes Livres de My Books</h1>
 {this.state.Books.map(bok =>(<div style={{marginBottom:"10px"}}><Book title={bok.title} category={bok.category}/>
</div>))} 
<div  style={{fontSize:"14px"}}>
<button>Emprunter</button>
<Link  to="/Addbook"><button className="btn btn-primay btn-sm">Nouveau Livre</button></Link>
</div>
</div>}}
