import logo from './logo.svg';
import './App.css';
import { TodoList } from './componentes/TodoList';
import React, { useState } from "react";


function App() {
 
 
  return (
    
    <section>
      <h2>Custom Todo-list</h2>
      <TodoList />
      
    </section>

  );
}

export default App;
