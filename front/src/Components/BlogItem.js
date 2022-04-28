import React from 'react'

const BlogItem = (props) => {
  return (
    <div className="col-md-3 my-2"> 
<div className="card"> 
  <div className="card-body">
  <h5 className="card-title">{props.note.image}</h5>
    <p className="card-text">{props.note.description}</p>
    {/* <i className="fas fa-trash-alt" onClick={()=>{deleteNote(props.note._id)}}></i>
    <i className="fas fa-edit mx-3" onClick={()=>{props.update()}}></i> */}
  </div>
</div>
</div>
  
  )
  
}

export default BlogItem;