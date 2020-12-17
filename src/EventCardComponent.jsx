import React, { useState, useMemo } from "react";
import styled from "styled-components";
var data = require('./data/data.json');

const Container = styled.div`
  .eventcard {
    position: relative;
    background-color: #fff;
    width: 80vw;
    max-width: 260px;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;

    h3, p {
      margin: 0px;
    }

    &__title {
      color: black;
      margin-bottom: 10px;
    }

    &__presentor {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      img {
        height: 50px;
        margin-left: 16px;
      }
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: black;
      font-size: 12px;
      
      p {
        margin: 2px;
      }
    }
  }
 `;

 const randomNumber = () => {
  return Math.floor(Math.random() * 20);
};

const getRandomImage = () => {
  const possibleImages = [
    `https://randomuser.me/api/portraits/men/${randomNumber()}.jpg`,
    `https://randomuser.me/api/portraits/women/${randomNumber()}.jpg`
  ];
  return possibleImages[Math.round(Math.random())];
}

const EventCardComponent = ({ event }) => {
  return (
    <Container>
      <div className="eventcard">
        <h3 className="eventcard__title">{event.title}</h3>
        <div className="eventcard__date">
          <p>{event.date}</p>
        </div>
        <div className="eventcard__presentor">
          <p>{event.presentor}</p>
          <img src={getRandomImage()} alt=""/>
        </div>
        <div className="eventcard__tags">
          {event.tags.map((item, index) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EventCardComponent;
