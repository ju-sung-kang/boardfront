import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/navbar';

function Main() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        getPostList()
    }, [])

    function getPostList() {
        axios.get("/api/post-list/")
            .then((res) => setPostList(res.data.post_list))
    }

    return (
        <>
            <NavBar />
            {postList.length === 0 ? (
                <p>작성된 글이 없습니다.</p>
            ) : (
                <ul>
                    {postList.map((post) =>
                        <li key={post.id}>
                            <span>{post.id}</span>
                            <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                            <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                            <span>{post.date}</span>
                        </li>
                    )}
                </ul>
            )}
        </>
    );
}

export default Main;