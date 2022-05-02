import React,{useContext,useEffect,useState} from 'react'
import NoteContext from './context/NoteContext';
import { useHistory } from 'react-router-dom';
const Addblog = () => {
 let history=useHistory();
   const[details,upDetails]=useState({image:"",description:""})
   const handleChange=(e)=>{
    upDetails({...details,[e.target.name]:e.target.value})
  }
    const context=useContext(NoteContext);
    const {showAll,addNote}=context;
    useEffect(()=>{
      if(localStorage.getItem('token'))
      {
      showAll();
      }
      else{
        history.push('/')
      }
      
    }, [])
    const submit=(e)=>{
      e.preventDefault()
addNote(details.image,details.description) 
upDetails({image:"",description:""}) //form k data ko bhj rhe hai baahar
    }
    
  return (
    <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">image</label>
    <input type="text" name="image" value={details.image} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="description" onChange={handleChange} name="description" value={details.description} className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Addblog