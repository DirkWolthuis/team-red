import React from "react";
import "./likes.css";

function Likes(props) {
  return (
    <>
      {props.likes.map((like) => (
        <div key={like} className="tag">
          {like}
        </div>
      ))}
    </>
  );
}

export default Likes;
