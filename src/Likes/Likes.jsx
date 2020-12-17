import React from 'react';
import './likes.css';


function Likes(props) {
    return (
        <>
            {
                props.likes.map((like) => (
                    <div key={like} className="tile">{like}</div>
                ))
            }
        </>
    );
}

export default Likes;