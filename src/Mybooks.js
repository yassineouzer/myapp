import Book from './Book'
  export const Mybooks = ()=> {

    const Books= [ 

      { title:"asterix",
        category : "BD",
      },

      { title:"tintin",
       category : "BD",
      }


    ]

   return <div>
       <h1>Mes Livres</h1>
{Books.map(book=><div><Book title={book.title} category={book.category}/>
<button>Modifier</button>
<button>Supprimer</button>
</div>)}
<br></br>
<button>Ajouter un Book</button>

   </div> }