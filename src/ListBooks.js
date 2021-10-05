import React from 'react'
import Book from './Book'

export default class ListBooks extends React.Component {
  
    constructor(){
        super();
         this.state={
             Books : [ ]
         }}

    componentDidMount() {
        this.setState({Books:[ 
               {
                 title:"tintin",
                category : "BD",
               },
               {
                title:"asterix",
               category : "BD",
              },
              {
                title:"asterix",
               category : "BD",
              },
               ]}) 
       
        }
 
  
     render() {
   
        return <div>
 <h1>Mes Livres disponibles</h1>
 {this.state.Books.map(book =>(<div><Book title={book.title} category={book.category}/>
</div>))}
<button>Modifier</button>
<button>Supprimer</button>
<button>Ajouter un Book</button>
</div>


}}
