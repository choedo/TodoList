import styled from "styled-components";
import { BiPencil } from "react-icons/bi";

const TodoInsertBlock = styled.form`
    display: flex;
    input {
        padding: 1rem 0.5rem;
        font-size: 1.125rem;
        line-height: 1.5;
        background: #fff;
        outline: none;
        border: none;
        flex: 1;
        &::placeholder {
            color: #888;
        }
    }
    button {
        background: #868e96;
        color: #fff;
        padding: 0 1rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: background 0.1s;
        &:hover {
            background: #adb5bd;
        }
    }
`

function TodoInsert({ input, onChangeInput, onInsert }) {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }
    const onChange = e => onChangeInput(e.target.value);

    return(
        <TodoInsertBlock onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="할 일을 입력하세요" 
                value={input}
                onChange={onChange}
            />
            <button type="submit"><BiPencil /></button>
        </TodoInsertBlock>
    );
}

export default TodoInsert;