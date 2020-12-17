import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import { getTags } from "./utils/DataHandler";
const jdenticon = require("jdenticon");

const Container = styled.div`
  width: 50%;

  .swipe {
    position: absolute;
  }

  .cardContainer {
    height: 300px;
    display: flex;
    justify-content: center;
  }

  .card {
    position: relative;
    background-color: #fff;
    width: 80vw;
    max-width: 260px;
    height: 300px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .swipe:nth-last-child(2) > .card {
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.1);
  }

  .swipe:last-child > .card {
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.1);
  }

  .cardContent {
    width: 100%;
    height: 100%;
  }

  .swipe:last-of-type {
  }

  .infoText {
    width: 100%;
    height: 28px;
    justify-content: center;
    display: flex;
    color: #fff;
    animation-name: popup;
    animation-duration: 800ms;
  }

  .buttons {
    margin: 20px;
    display: flex;
  }

  .buttons button {
    flex-shrink: 0;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    background-color: #9198e5;
    transition: 200ms;
    margin: 0 10px;
    font-weight: bolder;
    width: 160px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  }

  .buttons button:hover {
    transform: scale(1.05);
  }

  h1 {
    color: white;
  }

  h2 {
    width: 260px;
  }

  @keyframes popup {
    0% {
      transform: scale(1, 1);
    }
    10% {
      transform: scale(1.1, 1.1);
    }
    30% {
      transform: scale(0.9, 0.9);
    }
    50% {
      transform: scale(1, 1);
    }
    57% {
      transform: scale(1, 1);
    }
    64% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

const db = getTags();

const alreadyRemoved = [];
let tagsState = db; // This fixes issues with updating tags state forcing it to use the current state and not the state that was active when the card was created.

const TagSwipe = ({ likes, dislikes, setLikes, setDislikes }) => {
  const [tags, setTags] = useState(db);

  const [lastDirection, setLastDirection] = useState();
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    if (direction === "right") {
      setLikes([...likes, nameToDelete]);
    }
    if (direction === "left") {
      setDislikes([...dislikes, nameToDelete]);
    }

    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (tag) => {
    tagsState = tagsState.filter((tagMap) => tagMap !== tag);
    setTags(tagsState);
  };

  const swipe = (dir) => {
    const cardsLeft = tags.filter((tag) => !alreadyRemoved.includes(tag));
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1]; // Find the card object to be removed
      const index = db.indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <Container>
      <div>
        <h1>Do you like?</h1>
        <div className="cardContainer">
          {tags.map((tag, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={tag}
              onSwipe={(dir) => swiped(dir, tag)}
              onCardLeftScreen={() => outOfFrame(tag)}
            >
              <div className="card">
                <div
                  dangerouslySetInnerHTML={{
                    __html: jdenticon.toSvg(tag, 200),
                  }}
                ></div>

                <h3>{tag}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        {lastDirection ? (
          <h2 className="infoText">
            {lastDirection === "right"
              ? `you liked '${likes[likes.length - 1]}'`
              : `you disliked '${dislikes[dislikes.length - 1]}'`}
          </h2>
        ) : (
          <h2 className="infoText" />
        )}
      </div>
      <div className="buttons">
        <button onClick={() => swipe("left")}>Swipe left!</button>
        <button onClick={() => swipe("right")}>Swipe right!</button>
      </div>
    </Container>
  );
};

export default TagSwipe;
