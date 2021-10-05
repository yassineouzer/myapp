
import {BrowserRouter ,Route}  from "react-router-dom"
import ListBooks from "./ListBooks";
import Mybooks from "./Mybooks";
import Addbook from "./Addbook";
import Adduser from "./Adduser";
function App(){
  return (
   <BrowserRouter>
   <div className="App">
     <Route path="/ListBooks">
      <ListBooks/>
      </Route>

      <Route path="/Mybooks">
      <Mybooks/>
      </Route>

      <Route path="/Addbook">
      <Addbook/>
      </Route>

      <Route path="/Adduser">
      <Adduser/>
      </Route>
      </div>
      </BrowserRouter> 
  )}
export default App;
