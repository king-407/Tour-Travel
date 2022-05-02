import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    let history=useHistory();
    const[details,upDetails]=useState({email:"",password:""})
   const handleChange=(e)=>{
    upDetails({...details,[e.target.name]:e.target.value})
  }
  
  const host = "http://localhost:5000";
    const submit=async(e)=>{
      e.preventDefault()
    
        const response=await axios.post(`${host}/api/travel/login`,{
            email:details.email,
           password:details.password
        })
        console.log(response);
        if(response.data.success)
        {
            localStorage.setItem('token',response.data.token);
       history.push("/diary");
        }
    };
 //form k data ko bhj rhe hai baahar
    
  return (
    <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
      <input type="email" name="email" value={details.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" onChange={handleChange} name="password" value={details.password} className="form-control" id="exampleInputPassword1" />
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default Login