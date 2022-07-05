import styled, { css } from "styled-components";
import { BiTrash, BiBadge, BiBadgeCheck } from "react-icons/bi";

const TodoListItemBlock = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    background: #fff;
    &:nth-child(odd) {
        background: #ccd3d9;
    }
`;

const CheckBoxBlock = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    svg {
        font-size: 2rem;
        color: darkgray;
        cursor: pointer;
        &:hover {
            color: #38d9a9;
        }
        ${props => props.checked && css`
            color: #38d9a9;
        `}
    }
    p {
        margin-left: 0.5rem;
        flex: 1;
        font-size: 1.5rem;
        ${props => props.checked && css`
            color: #adb5bd;
            text-decoration: line-through;
        `}
    }
`;

const RemoveBoxBlock = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: #ff6b6b;
    cursor: pointer;

    &:hover {
        color: #ff8787;
    }
`;

function TodoListItem({ todo, onRemove, onToggle }) {
    const { id, text, checked } = todo;

    return(
        <TodoListItemBlock>
            <CheckBoxBlock checked={checked}>
                {checked ? <BiBadgeCheck onClick={() => onToggle(id)} /> : <BiBadge onClick={() => onToggle(id)} />}
                <p>{text}</p>
            </CheckBoxBlock>
            <RemoveBoxBlock onClick={() => onRemove(id)}>
                <BiTrash />
            </RemoveBoxBlock>
        </TodoListItemBlock>
    );
}

export default TodoListItem;