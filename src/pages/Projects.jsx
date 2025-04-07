import { useState, useEffect } from 'react'
import axios from "axios";

const API_URL = "http://localhost:5000/todos";


const Projects = () => {
  // const [todos, setTodos] = useState([]);
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  // const fetchTodos = async () => {
  //   const response = await axios.get(API_URL);
  //   setTodos(response.data)
  // }

  // const addTodo = async () => {
  //   if(text.trim()){
  //     const response = await axios.post(API_URL, {text});
  //     setTodos([...todos, response.data]);
  //     setText("")
  //   }
  //   console.log(text);
  // };

  // const delTodo = async (id) => {
  //   await axios.delete(`${API_URL}/${id}`);
  //   setTodos(todos.filter((t)=> t.id !== id));
  // };

  // const toggleComplete = async (id) => {
  //   const todo = todos.find((t) => t.id == id);
  //   const response = await axios.put(`${API_URL}/${id}`, {
  //     completed: !todo.completed,
  //   });
    
  //   setTodos(
  //     todos.map((t) => (t.id === id ? {...t, completed: response.data.completed} : t))
  //   );
  // };

  return (
    <main className="main" style={{width: "100%"}}>
      <div className="container">
        <div className="header">
          <h2 className="title">
            {" "}
            <span className="gradient-text-2">
              <a target="_blank" rel="noopener noreferrer">
                Projects
              </a>
            </span>
          </h2>
        </div>

        <div className="blocks">
          <a className="card">
            <div className="card-text">
              <h2 className="gradient-text-1">Coming Soon</h2>
              <p>
                For now, you can see my projects at my <a href="https://github.com/zoraork555">Github</a>.
              </p>
              
            </div>
          </a>
        </div>
        {/* <input 
          type="text"
          placeholder="Add Todo.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo} style={{ marginLeft: "10px" }}>Add</button>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {todos.map((todo) => (
            <li key={todo.id} style={{ marginTop: "10px" }}>
              <span
                onClick={() => toggleComplete(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', 
                cursor: "pointer" }}
              >
                  {todo.text}
              </span>
              <button onClick={()=> delTodo(todo.id)} style={{ marginLeft: "10px" }}>Delete</button>
            </li>
          ))}
        </ul> */}
      </div>
    </main>
  );
};

export default Projects;