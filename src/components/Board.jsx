import React from "react";
import "./board.css";
import TodoItem from "./TodoItem";

function Board(props) {
    return(
        <div className="todoList_box">
            <h2>Todo List</h2>
            {props.todoList.map((item) => <TodoItem item={item} />)}
        </div>
    );
}

export default Board;