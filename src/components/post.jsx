import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post({ id }) {
    const [post, setPost] = useState({})

    useEffect(() => {
        getPost()
    }, [])

    function getPost() {
        axios.get(`/api/post-detail/${id}/`)
            .then((res) => setPost(res.data.post))
    }

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
}

export default Post;
