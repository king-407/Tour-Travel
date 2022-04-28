import React,{useContext} from 'react'
import Addblog from './Addblog'
import NoteContext from './context/NoteContext';
import BlogItem from './BlogItem';
const Blog = () => {
 
   const context=useContext(NoteContext);
    const {notes}=context;
    
  return (
   
    <>
      <Addblog/>
    <div className="container my-3">
        <div className="row">
          <div align="center">
            <h1> Your Blog</h1>
          </div>
          {notes.map((note) => {
            return <BlogItem key={note._id} note={note}/>  //jo jo entry note k array me hoge vo card bnn k fetch ho jaega aur kyunki add note phle likha gya h//
          })}

        </div>
      </div>
    </>
    

  )
}

export default Blog