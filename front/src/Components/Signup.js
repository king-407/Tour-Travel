import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Signup = () => {
    let history=useHistory();
    const[details,upDetails]=useState({name:"",email:"",password:""})
   const handleChange=(e)=>{
    upDetails({...details,[e.target.name]:e.target.value})
  }
  const host = "http://localhost:5000";
    const submit=async(e)=>{
      e.preventDefault()
const response=await axios.post(`${host}/api/travel/createuser`,{
    name:details.name,
    email:details.email,
    password:details.password

}
)
console.log(response);
if(response.data.success)
{
    localStorage.setItem('token',response.data.token);
    history.push("/diary");
}
console.log(response);
    }
  return (
    <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input type="text" name="name" value={details.name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">email</label>
      <input type="email" onChange={handleChange} name="email" value={details.email} className="form-control" id="exampleInputPassword1" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" onChange={handleChange} name="password" value={details.password} className="form-control" id="exampleInputPassword1" />
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>

  </form>
  )
}

export default Signup