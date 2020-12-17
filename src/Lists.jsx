import React from "react";
import styled from "styled-components";
import EventCardComponent from "./EventCardComponent";
import { getEventsForTags } from "./utils/DataHandler";

const StyledLists = styled.div`
  .list-container {
    min-width: 380px;
    height: 90vh;
    overflow-y: scroll;
    justify-content: flex-start;

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
  return (
    <StyledLists>
      <h1>Your next event:</h1>
      <div className="list-container">
        {props.likes.length > 0 && displayedEvents.slice(0, 4).map((event, index) => (
          <div key={event.id} className="event-container">
            <h3 className="event-container__title">
              {index + 1}
            </h3>
            <EventCardComponent key={event.id} event={event} likes={props.likes} />
          </div>
        ))}
      </div>
    </StyledLists>
  );
};

export default Lists;
