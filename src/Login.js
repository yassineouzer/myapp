import React from 'react'
import { Link } from "react-router-dom"

export default class Login extends React.Component {

  constructor(){
  super();
  this.state={userData :{}}
}




render(){
    return (
        <div>
             <div style={{display:"flex",justifyContent:"center" ,position:"relative"}}>
           <form style={{width:"50%",marginLeft:"50px" ,position:"absolute",top:"60px"}} onSubmit={this.onSubmit}>
          <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"required />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" required onChange={this.handlechange}/>
    <button type="submit" value="valider" className="btn btn-primary btn-sm btn-block"style={{marginTop:"20px",width:"100%"}}>Login</button>
    <Link  to="/Adduser">S'inscrire</Link>
  </div></form>
        </div> 
       
        </div>
    )  }
}
