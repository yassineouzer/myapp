
import {BrowserRouter ,Route}  from "react-router-dom"
import ListBooks from "./ListBooks";
import Mybooks from "./Mybooks";
import Addbook from "./Addbook";
import Adduser from "./Adduser";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Myborrows from "./Myborrows";


function App(){
  return (
   <BrowserRouter>
   <div className="App" style={{backgroundImage:"linear-gradient(#87CEEB,#87CEEB)"}}>
     <Route path="/ListBooks">
      <ListBooks/>
      </Route>

      <Route path="/Mybooks">
      <Mybooks/>
      </Route>

      <Route exact path="/Addbook">
      <Addbook/>
      </Route>
    
      <Route exact path="/Addbook/:bookId">
      <Addbook/>
      </Route>

      <Route path="/Adduser">
      <Adduser/>
      </Route>

      <Route path="/Login">
      <Login/>
      </Route>

      <Route path="/Header">
      < Header/>
      </Route>
 
      <Route path="/Myborrows">
      < Myborrows/>
      </Route>
      
      </div>
      </BrowserRouter> 
  )}
export default App;
