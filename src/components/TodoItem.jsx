import React, { useState } from "react";
import "./todoItem.css";
import { BsTrash2Fill, BsCheckCircleFill, BsEmojiAngry } from "react-icons/bs";

function TodoItem(props) {
    const [status, setStatus] = useState(false);
    const ckBtn = () => {
        setStatus(!status);
    }

    const [del, setDel] = useState(false);
    const delBtn = () => {
        setDel(true);
    }
    return(
        <>
        {!del &&
        <div className="items">
            <p>
                <button onClick={ckBtn} status={status}>{status ? <BsCheckCircleFill className="checkBtn" />: <span className="noCk"></span>}</button>
                <span status={status}>{status ? <strong>{props.item}</strong> : <em>{props.item}</em>}</span>
                <button onClick={delBtn} del={del}><BsTrash2Fill className="deleteBtn" /></button>
            </p>
        </div>
        }
        </>
    );
}

export default TodoItem;