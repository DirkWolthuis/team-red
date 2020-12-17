import React from "react";
import styled from "styled-components";
import EventCardComponent from "./EventCardComponent";
import { getEventsForTags } from "./utils/DataHandler";

const StyledLists = styled.div`
  .list-container {
    width: 50%;
    height: 80vh;
    overflow-y: scroll;
    justify-content: flex-start;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .event-container {
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      color: white;
      margin-right: 16px;
    }
  }
  h1 {
    color: white;
  }
`;

const Lists = (props) => {
  const displayedEvents = getEventsForTags(props.likes);
<<<<<<< HEAD
  console.log(displayedEvents);
  return <StyledLists>
  	<div className="list-container">
      {displayedEvents.slice(0,4).map((event, index) => (
        <div className="event-container" key={event.id}>
          <h3 className="event-container__title">{index + 1}</h3>
          <EventCardComponent event={event}/>
        </div>
      ))}
    </div>
  </StyledLists>;
=======
  return (
    <StyledLists>
      <h1>Your next event:</h1>
      <div className="list-container">
        {displayedEvents.slice(0, 4).map((event, index) => (
          <div key={event.id} className="event-container">
            <h3 className="event-container__title">
              {index + 1} ({event.hits})
            </h3>
            <EventCardComponent key={event.id} event={event} />
          </div>
        ))}
      </div>
    </StyledLists>
  );
>>>>>>> c6f308be250ae1ad2b3418fe82f68f59f1a71e9e
};

export default Lists;
