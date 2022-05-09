import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Comments({ id }) {
    const [commentList, setCommentList] = useState([]);
    const [content, setContent] = useState("");

    useEffect(() => {
        getCommentList()
    }, [])

    function getCommentList() {
        axios.get(`/api/comment-list/${id}/`)
            .then((res) => setCommentList(res.data.comment_list))
    }

    function handleChange(e) {
        setContent(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`/api/comment-write/${id}/`, { content: content })
            .then(alert("작성이 완료되었습니다."))
            .then(window.location.reload())
    }

    return (
        <>
            {commentList.length === 0 ? <div>댓글이 없습니다.</div> : (
                <ul>
                    {commentList.map((comment) => (
                        <li key={comment.id}>
                            <span>{comment.content}</span>
                            <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                            <span>{comment.date}</span>
                        </li>
                    ))}
                </ul>
            )}
            <form onSubmit={handleSubmit}>
                <div style={{ borderTop: "1px solid black", width: "500px" }}>댓글을 작성하세요.</div>
                <textarea cols="30" rows="10" onChange={handleChange}></textarea>
                <input type="submit" value="댓글쓰기" />
            </form>
        </>
    );
}

export default Comments;