import React, { useState } from 'react'
import NoteContext from './NoteContext'
import axios from "axios"
const Notestate = (props) => {
    const initial=[];
    const [notes,update]=useState(initial);
    const host = "http://localhost:5000";
   
    const showAll=async()=>{

        // const response = await fetch(`${host}/api/blog/fetchtravel`,{
        //     method: 'GET',

        //     headers: {
        //         'Content-Type': 'application/json',
        //         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2NmQ0MGY3ZDk3ZjM2MmQzMDA2YmIyIn0sImlhdCI6MTY1MTE3MjQzMn0.CGFTPpyGaB-q-bwhiBARDyHCpZjik-Yj6tXbWDBtqd8"

        //     },

           
        // });
        // const json=await response.json();
        // console.log(json)
        // update(json);  
        const response=await axios.get(`${host}/api/blog/fetchtravel`,{
            headers:{
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2YWVjODQ5MWYyYTYyMGZjOGY1ZmMyIn0sImlhdCI6MTY1MTE3NDU1Mn0.FVIk5Pz0zA55ww64zv0iuirJg41RHHWltJ-Q9BBrDxQ"
            }
        }
       
        )
        console.log(response)
        update(response.data);

    }

    
  return (
    <NoteContext.Provider value={{ notes,showAll }}>
            {props.children}
        </NoteContext.Provider>

    
  )
}

export default Notestate