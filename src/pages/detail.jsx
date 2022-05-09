import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/navbar';
import Post from '../components/post';
import Comments from '../components/comments';

function Detail() {
    const { id } = useParams()
    return (
        <>
            <NavBar />
            <Post id={id} />
            <Comments id={id} />
        </>
    );
}

export default Detail;