import React from 'react';
import "./styles.css";
import techenthusiast from "../../assets/images/tech meetup.jpg";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Card(){
    return (
        <div>
            <img src={techenthusiast} className='card-img' />
            <div className='card-info'>
                <h3 className='card-title' style={{margin:"0.3"}}>Technology Meetup</h3>
                </div>
                <div className='host'>
                    <p style={{margin:"0"}}>Hosted By: Tech4Dev</p>
                </div>
                <div className='card-dates'>
                    <CalendarMonthIcon className='calendar-icon' sx={{fontSize:"1rem"}}/>
                    <p>Oct 20, 2021</p>
                </div>
        </div>
        
    )
}

export default Card;