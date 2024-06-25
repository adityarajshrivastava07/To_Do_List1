import React, { useState, useEffect } from 'react';

export const Addtodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=>{ 
    
     e.preventDefault();
     if(!title || !desc){
      alert("Title or Description cannot be black")
     }
     else{
     addTodo(title, desc);
     setTitle("");
     setDesc("");
  }
}  
  return (
    <div className="container my-4">  
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Todo Titlte</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}
       className="form-control" id="title" aria-describedby="emailHelp"/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Todo Description</label>
      <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}
       className="form-control" id="dsec"/>
    </div>
    <button type="submit" className="btn btn-primary">Add Todo</button>
  </form></div>
  )
}
