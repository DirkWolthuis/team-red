import React from "react";
import styled from "styled-components";
import EventCardComponent from "./EventCardComponent";
import { getEventsForTags } from "./utils/DataHandler";

const StyledLists = styled.div`
  width: 50%;

  .event-container {
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      color: white;
      margin-right: 16px;
    }
  }
`;

const Lists = (props) => {
  const displayedEvents = getEventsForTags(["Advantageyou", "api", "Microservices", "Analytics"]);
  return <StyledLists>
    {displayedEvents.slice(0,4).map((event, index) => (
      <div className="event-container">
        <h3 className="event-container__title">{index + 1} ({event.hits})</h3>
        <EventCardComponent key={event.id} event={event}/>
      </div>
    ))}
  </StyledLists>;
};

export default Lists;
