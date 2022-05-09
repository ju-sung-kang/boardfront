import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Link to="/">홈</Link>
            <span>&nbsp;|&nbsp;</span>
            <Link to="/write">글쓰기</Link>
        </div>
    )
}

export default NavBar;