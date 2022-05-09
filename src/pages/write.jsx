import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navbar';

function Write() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleContentChange(e) {
        setContent(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        axios.post("/api/post-write/", {
            title: title,
            content: content
        })
            .then(alert("작성이 완료되었습니다."))
            .then(navigate("/"))
    }

    return (
        <>
            <NavBar />
            <form>
                <p>제목</p>
                <input type="text" onChange={handleTitleChange} />
                <p>본문</p>
                <textarea cols="30" rows="10" onChange={handleContentChange} />
                <br />
                <input type="submit" value="작성하기" onClick={handleSubmit} />
            </form>
        </>
    )
}


export default Write;