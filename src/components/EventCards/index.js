import React from 'react';
import "./styles.css";
import Card from './card';
import techmeetup from "../../assets/images/tech meetup.jpg";
import techenthusiast from "../../assets/images/tech enthusiasts.jpg"; 
import IWD from "../../assets/images/IWD.png";
import Muslimwomenmeetup from "../../assets/images/muslim women meetup.png";
import Esports from "../../assets/images/esports.png";
import bookclub from "../../assets/images/book club.png";
import Arts from "../../assets/images/arts.png";

function EventCards(){
    return (
        <div className='event-cards-container'>
            <div className='events-locations'>
            <h3 className='events-near-lagos'>Events Near Lagos</h3>
            <a href='#' className='view-all'>View All Events</a>
            </div>
            <div className='event-cards-flex'>
                <Card 
                title= "Technology Meetup"
                host= "Tech4Dev"
                date= "Apr 20, 2024"
                imgSrc={techmeetup}
                />
                <Card 
                title= "Google Devfest"
                host= "Google"
                date= "May 22, 2024"
                imgSrc={techenthusiast}
                />
                <Card
                title= "IWD Meet and Greet with Tech Cofounders"
                host= "She Code Africa"
                date= "May 10, 2024"
                imgSrc={IWD}
                 />
                <Card 
                 title= "Muslim Women in Tech Meetup"
                 host= "Muslims in Tech Africa"
                 date= "June 15, 2024"
                 imgSrc={Muslimwomenmeetup}
                />
                <Card 
                 title= "Esports Tournament"
                 host= "Esports Nigeria"
                 date= "June 29, 2024"
                 imgSrc={Esports}
                />
                <Card 
                title= "A night with Books"
                host= "Book Club"
                date= "July 21, 2024"
                imgSrc={bookclub}
                />
                <Card 
                title= "Heal through Art"
                host= "Art Therapy"
                date= "July 25, 2024"
                imgSrc={Arts}
                />
            </div>
        </div>
    )
}

export default EventCards;