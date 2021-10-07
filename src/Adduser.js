import React from 'react'

export default function Adduser() {
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
           <form style={{width:"50%",marginLeft:"50px"}}>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Firstname</label>
    <input type="text" className="form-control form-control-sm" id="formGroupExampleInput" required/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">LastName</label>
    <input type="text" className="form-control form-control-sm" id="formGroupExampleInput2" required/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"required />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" required />
  </div>
  <div className="form-group form-check">
    
  </div>
  <button type="submit" value="valider" className="btn btn-primary btn-sm btn-block"style={{marginTop:"20px",width:"100%"}}>S'inscrire</button>
</form>
        </div>
    )
}
