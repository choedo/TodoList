import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { BsPlusCircleFill } from "react-icons/bs";


function App() {
  const [inputValue, setInputValue] = useState('');

  const [todoList, setTodoList] = useState([]);

  const addBtn = () => {
    if(inputValue === '') {
      alert('할 일을 입력해주세요!');
      return false;
    }else {
      setTodoList([...todoList, inputValue]);
      setInputValue('');
    }
  }

  const today = new Date();
  const dateName = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const weekName = today.toLocaleDateString('ko-KR', {
    weekday: 'long'
  });

  return (
    <div className='container'>
      <h1 className='title'>{dateName}<span>({weekName})</span></h1>
      <div className='input_area'>
        <input type="text" placeholder="할 일을 입력해주세요" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
        <button onClick={addBtn}><BsPlusCircleFill className='addBtn' /></button>
      </div>
      <Board todoList={todoList} />
    </div>
  );
}

export default App;
