import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

const Container = styled.div`
  .app > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .row {
    flex-direction: row !important;
  }

  .row > * {
    margin: 5px;
  }

  .swipe {
    position: absolute;
  }

  .cardContainer {
    max-width: 260px;
    height: 300px;
  }

  .card {
    position: relative;
    background-color: #fff;
    width: 80vw;
    max-width: 260px;
    height: 300px;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
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

const db = [
  {
    name: "Raspberry Pi",
  },
  {
    name: "Docker",
  },
  {
    name: "Svelte",
  },
  {
    name: "Gitlab",
  },
  {
    name: "Kubernetes",
  },
];

const alreadyRemoved = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const TagSwipe = () => {
  const [characters, setCharacters] = useState(db);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

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
      setDislikes([...disLikes, nameToDelete]);
    }

    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <Container>
      <div>
        <h1>React Tinder Card</h1>
        <div className="cardContainer">
          {characters.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div className="card">
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        {lastDirection ? (
          <h2 className="infoText">
            {lastDirection === "right"
              ? `you liked ${likes[likes.length - 1]}`
              : `you liked ${dislikes[dislikes.length - 1]}`}
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
