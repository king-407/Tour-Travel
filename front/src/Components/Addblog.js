import React,{useContext,useEffect} from 'react'
import NoteContext from './context/NoteContext';
const Addblog = () => {
   
    const context=useContext(NoteContext);
    const {showAll}=context;
    useEffect(()=>{
      showAll()
    
      
    }, [])
  return (
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">image</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Addblog