import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Likes from "./Likes/Likes";
import Lists from "./Lists";
import TagSwipe from "./TagSwipe";

const GlobalStyle = createGlobalStyle`

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

body{
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  text-align: center;
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.app{
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

#root>div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app>div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1{
  color: white;
}
`;

function App() {
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  const onAddLike = (like) => {
    setLikes((likes) => [...likes, like]);
  };

  const onAddDislike = (dislike) => {
    setDislikes((dislikes) => [...dislikes, dislike]);
  };

  return (
    <>
      <GlobalStyle />
      <h1>Wednesday Evening Training Matching AI 0.9 (WETMAI09)</h1>
      <div className="app">
        <TagSwipe
          likes={likes}
          dislikes={dislikes}
          onAddLike={onAddLike}
          onAddDislike={onAddDislike}
        />
        <Lists likes={likes} dislikes={dislikes} />
      </div>
    </>
  );
}

export default App;
