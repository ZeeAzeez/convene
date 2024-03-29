import React from 'react';
import "./styles.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Card({ title, host, date, imgSrc }){
    return (
        <div>
            <img src={imgSrc} className='card-img' />
            <div className='card-info'>
                <h3 className='card-title' style={{margin:"0.3"}}>{title}</h3>
                </div>
                <div className='host'>
                    <p style={{margin:"0"}}>Hosted By: {host}</p>
                </div>
                <div className='card-dates'>
                    <CalendarMonthIcon className='calendar-icon' sx={{fontSize:"1rem"}}/>
                    <p>{date}</p>
                </div>
        </div>
        
    )
}

export default Card;