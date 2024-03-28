import React from 'react';
import "./styles.css";
import Card from './card';

function EventCards(){
    return (
        <div className='event-cards-container'>
            <div className='events-locations'>
            <h3 className='events-near-lagos'>Events Near Lagos</h3>
            <a href='#' className='view-all'>View All Events</a>
            </div>
            <div className='event-cards-flex'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default EventCards;