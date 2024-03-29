import React from 'react';
import "./styles.css";
import UpcomingEventCard from "./eventcards";
import techmeetup from "../../assets/images/tech meetup.jpg";
import techenthusiast from "../../assets/images/tech enthusiasts.jpg"; 
import IWD from "../../assets/images/IWD.png";
import Muslimwomenmeetup from "../../assets/images/muslim women meetup.png";


function UpcomingEvents(){
    return (
        <div className='event-cards-container'>
            <div className='events-locations'>
            <h3 className='events-near-lagos'>Upcoming Events</h3>
            </div>
            <div className='event-cards-flex'>
                <UpcomingEventCard 
                title= "Technology Meetup"
                host= "Tech4Dev"
                date= "Apr 20, 2024"
                imgSrc={techmeetup}
                />
                <UpcomingEventCard 
                title= "Google Devfest"
                host= "Google"
                date= "May 22, 2024"
                imgSrc={techenthusiast}
                />
                <UpcomingEventCard
                title= "IWD Meet and Greet with Tech Cofounders"
                host= "She Code Africa"
                date= "May 10, 2024"
                imgSrc={IWD}
                 />
                <UpcomingEventCard 
                 title= "Muslim Women in Tech Meetup"
                 host= "Muslims in Tech Africa"
                 date= "June 15, 2024"
                 imgSrc={Muslimwomenmeetup}
                />
            </div>
        </div>
    )
}

export default UpcomingEvents;