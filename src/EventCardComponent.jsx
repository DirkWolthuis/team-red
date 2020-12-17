import React from "react";
import styled from "styled-components";
var data = require("./data/data.json");

const Container = styled.div`
  .eventcard {
    position: relative;
    background-color: #fff;
    width: 80vw;
    max-width: 260px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    padding: 20px;
    margin-bottom: 16px;

    &__border {
      width: 100%;
      height: 1px;
      background-color: #a7f3d0;
      margin: 12px 0px;
    }

    h3,
    p {
      margin: 0px;
    }

    &__title {
      color: black;
      margin-bottom: 10px;
    }

    &__presentor {
      display: flex;
      margin-bottom: 16px;
      justify-content: flex-start;

      img {
        border-radius: 100px;
        height: 50px;
        margin-right: 16px;
      }
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;

      color: black;
      font-size: 12px;

      .tag {
        background-color: #a7f3d0;
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 0px 4px;
        border-radius: 4px;
        color: #064e3b;
        border: 1px solid #10b981;
      }
    }
  }
`;

const EventCardComponent = (props) => {
  const { event } = props;
  return (
    <Container>
      <div className="eventcard">
        <h3 className="eventcard__title">{event.title}</h3>
        <div className="eventcard__date">
          <p>{event.date}</p>
        </div>
        <div className="eventcard__border"></div>
        <div className="eventcard__presentor">
          <img src={event.image} alt="" />
          <p>{event.presentor}</p>
        </div>
        <div className="eventcard__border"></div>
        <div className="eventcard__tags">
          {event.tags.map((item, index) => (
            <div className="tag" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EventCardComponent;
