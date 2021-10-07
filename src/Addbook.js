import React from 'react'


export default function Addbook() {
    return (
  <div> 
      <div style={{display:"flex",justifyContent:"flex-start"}}>
        <h1 style={{fontSize:"30px",marginLeft:"25px"}}>Ajouter un livre</h1></div>
<form style={{width:"50%",marginLeft:"50px"}}> 
    <div>
        <label>Nom du livre</label>
        <input type="text" name="name" className="form-control" required></input></div>
<div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Categorie du livre</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>BD</option>
      <option>ROMAN</option>
  
    </select>
  </div>
  <div style={{display:"flex",justifyContent:"flex-start"}}> 
      <button type="submit" value="valider" className="btn btn-primary btn-sm btn-block"style={{marginTop:"20px",width:"100%"}}>Ajouter</button>
  </div>
</form>

</div>

    
    )
}
 