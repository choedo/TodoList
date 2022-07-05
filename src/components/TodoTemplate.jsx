import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    padding: 10px 30px;
    background: #689c97;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    h1 {
        font-size: 2.5rem;
        color: #fff;
    }
    h2 {
        font-size: 2rem;
        color: #fff;
    }
`;

function TodoTemplate() {
    const today = new Date();
    const dateName = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    return(
        <TodoTemplateBlock>
            <h1>{dateName}</h1>
            <h2>TodoList</h2>
        </TodoTemplateBlock>
    );
}

export default TodoTemplate;