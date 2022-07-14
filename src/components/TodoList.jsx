import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListBlock = styled.div`
    min-height: 320px;
    max-height: 520px;
    overflow-y: auto;
`;

function TodoList({ todos, onRemove, onToggle }) {
    return(
        <TodoListBlock>
            {todos.map(todo => (
                <TodoListItem 
                    todo={todo} 
                    key={todo.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;