import React from 'react';
import styled from 'styled-components';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from './modules/todos';

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

function App({ input, todos, changeInput, insert, toggle, remove }) {
  return (
    <Template>
      <TodoTemplate />
      <TodoInsert 
        input={input}
        todos={todos} 
        onChangeInput={changeInput} 
        onInsert={insert} 
      />
      <TodoList 
        todos={todos} 
        onRemove={remove} 
        onToggle={toggle} 
      />
    </Template>
  );
}

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }),
  {
    changeInput,
    insert,
    toggle,
    remove
  }
)(App);
