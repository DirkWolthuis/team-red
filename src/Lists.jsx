import React from "react";
import styled from "styled-components";
import EventCardComponent from "./EventCardComponent";

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

const displayedEvents = [
  {
    "id": "7cec1d3e-fc4b-4d9c-adab-a75187d70116",
    "title": "Microservices and testing",
    "presentor": "Abbi Mcdonnell",
    "gender": "women",
    "location": "CoZone and Canteen",
    "date": "16/9/2019",
    "tags": ["API", "Microservices", "Serverless", "Testing", "Architecture"]
  },
  {
    "id": "98ee4bed-ae15-485b-b054-79832e2a7056",
    "title": "Data & Analytics Management Event",
    "presentor": "Kristian Mahoney",
    "gender": "men",
    "location": "CoZone and Canteen",
    "date": "21/9/2020",
    "tags": ["Data science", "Big data", "Analytics", "Hosting"]
  },
  {
    "id": "b66a1d01-3b49-4002-b755-676b47ecd3b9",
    "title": "SAP on Azure Envision Workshops",
    "presentor": "Celine Stubbs",
    "gender": "women",
    "location": "CoZone and Canteen",
    "date": "28/9/2019",
    "tags": ["SAP", "Azure", "Hosting", "Architecture"]
  },
  {
    "id": "97ed5319-3894-407e-ad7c-43f42c00b709",
    "title": "Agile gaming evening",
    "presentor": "Ami Shea",
    "gender": "men",
    "location": "CoZone LR",
    "date": "12/10/2020",
    "tags": ["Gaming", "Agile", "Social"]
  },
  {
    "id": "8903f7f1-a0f0-4df0-8ae3-1e917a442935",
    "title": "Combi IoT/Arduino klusavond",
    "presentor": "Linda Gunn",
    "gender": "women",
    "location": "CoZone LR",
    "date": "2/11/2020",
    "tags": ["IoT", "Arduino"]
  },
  {
    "id": "4ffffb46-0481-42bc-8e4c-c2d63b126781",
    "title": "IoT Microprocessor",
    "presentor": "Linda Gunn",
    "gender": "women",
    "location": "CoZone LR",
    "date": "16/11/2020",
    "tags": ["IoT", "Arduino"]
  },
  {
    "id": "74bc7993-6078-4aae-89e8-03809eca3519",
    "title": "AdvantageYou event:  DevOps",
    "presentor": "Leandro Kumar",
    "gender": "men",
    "location": "CoZone LR",
    "date": "30/11/2020",
    "tags": ["DevOps", "AdvantageYou"]
  },
  {
    "id": "2c3697ec-7461-4215-b9aa-dab87d770887",
    "title": "AdvantageYou: Internet of Things",
    "presentor": "Ethel Holmes",
    "gender": "men",
    "location": "CoZone LR",
    "date": "10/12/2020",
    "tags": ["IoT", "AdvantageYou"]
  },
  {
    "id": "95795e2f-d40d-4236-a0ec-d08cd12080b5",
    "title": "AdvantageYou event: Ethics & AI",
    "presentor": "Ethel Holmes",
    "gender": "men",
    "location": "CoZone LR",
    "date": "3/12/2020",
    "tags": ["Machine learning", "AdvantageYou"]
  },
  {
    "id": "0dd57b0b-8869-4dc2-bd5e-789e25d6f351",
    "title": "AdvantageYou event: Intelligent Automation",
    "presentor": "Linda Gunn",
    "gender": "women",
    "location": "CoZone LR",
    "date": "16/12/2020",
    "tags": ["IoT", "Machine learning", "AdvantageYou"]
  },
  {
    "id": "60691b8b-0d02-4691-95bc-9b09f64e139c",
    "title": "(Capgemini CSD Java) Radio Kafka: Discussion on Chapter 11-12",
    "presentor": "jade.eloff@capgemini.com",
    "gender": "women",
    "date": "Thursday, January 7th, 2021",
    "url": "",
    "tags": ["Java"]
  },
  {
    "id": "29e1d2cf-094b-4ab8-93cf-78f338e5aaef",
    "title": "How to handle your patterns? IoT/Arduino klusavond (discussion included)",
    "presentor": "Bart van Beek & Hans van Rijs",
    "gender": "men",
    "date": "Wednesday, January 13th, 2021: 18:30h – 21:00h",
    "url": "",
    "tags": ["IoT", "Arduino"]
  },
  {
    "id": "e97403b7-4a25-401e-a442-3a8e1466bfe6",
    "title": "(Capgemini CSD Java) Radio Kafka: Discussion on Chapter 12-15",
    "presentor": "jade.eloff@capgemini.com",
    "gender": "men",
    "date": "Thursday, January 14th, 2021",
    "url": "",
    "tags": ["Java"]
  },
  {
    "id": "2e397849-0d49-43bc-9768-2e4b96cfbf6b",
    "title": "Practical 3D Graphics & Programming",
    "presentor": "Quincy Jacobs, Remko Haagsma",
    "gender": "men",
    "date": "Wednesday, January 20th, 2021",
    "url": "",
    "tags": ["3D", "Graphics", "Animation"]
  },
  {
    "id": "ed52be4b-0d30-4f92-9dd4-58d82fb92dff",
    "title": ".NET 5 + Blazor + Xamarin + Visual Studio 2019 productivity tips",
    "presentor": "Sina Wahed & Karel Metselaar",
    "gender": "men",
    "date": "Wednesday, February 3rd",
    "url": "",
    "tags": [".NET", "xamarin", "Blazor", "productivity"]
  },
  {
    "id": "ff2940d8-4a0f-4690-a5b6-048f3ee1b8df",
    "title": "IoT: Exploring IoT Microprocessors",
    "presentor": "Martin Brommer",
    "gender": "men",
    "date": "Wednesday, February 10th",
    "url": "",
    "tags": ["IoT", "Microproceccor"]
  },
  {
    "id": "80fd77a6-3a40-45d8-b3ba-ad75b0a6ac6f",
    "title": "How to deal with agile startarchitecture",
    "presentor": "Ben Kooistra & Hans van Rijs",
    "gender": "men",
    "date": "Wednesday, February 3rd",
    "url": "",
    "tags": ["Architecture", "Agile"]
  },
  {
    "id": "b7217d9e-b274-4346-b462-f7978b232e82",
    "title": "Building OAUTH2 security with SpringBoot",
    "presentor": "Bart van Beek",
    "gender": "men",
    "date": "Wednesday, February 17th, 2021",
    "url": "",
    "tags": ["Security", "OAuth", "Java", "Spring", "Spring Boot"]
  },
  {
    "id": "c5713ad4-aab8-4494-8526-89bc7e145649",
    "title": "Practical 3D Graphics & Programming",
    "presentor": "Quincy Jacobs & Remko Haagsma",
    "gender": "men",
    "date": "Wednesday, February 24th, 2021",
    "url": "",
    "tags": ["3D", "Graphics", "Animation"]
  },
  {
    "id": "4b3e06e8-965d-43f1-933a-ffcaa749c2a5",
    "title": "IoT/Arduino klusavond",
    "presentor": "Aishwarya Dhall",
    "gender": "men",
    "date": "Wednesday, March 10th, 2021",
    "url": "",
    "tags": ["IoT", "Arduino"]
  }
];

const Lists = (props) => {
  return <StyledLists>
    {displayedEvents.slice(0,4).map((event, index) => (
      <div className="event-container" key={event.id}>
        <h3 className="event-container__title">{index + 1}</h3>
        <EventCardComponent event={event}/>
      </div>
    ))}
  </StyledLists>;
};

export default Lists;
