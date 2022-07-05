import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const Template = styled.div`
  width: 768px;
  margin: 100px auto 0;
  background: none;
  border-radius: 15px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(
        todos.filter(todo => todo.id !== id)
      );
    }, [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo)
      );
    }, [todos]
  );

  return (
    <Template>
      <TodoTemplate />
      <TodoInsert onInsert={onInsert} />
      <TodoList 
        todos={todos} 
        onRemove={onRemove} 
        onToggle={onToggle} 
      />
    </Template>
  );
}

export default App;
