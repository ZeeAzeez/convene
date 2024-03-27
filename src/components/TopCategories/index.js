import React from 'react';
import { useState } from 'react';
import "./styles.css";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SailingIcon from '@mui/icons-material/Sailing';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SpaIcon from '@mui/icons-material/Spa';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CasinoIcon from '@mui/icons-material/Casino';

function TopCategories(){
    const categories = [
        { label: 'Technology', icon: <SmartToyIcon className='technology-icon' style={{color: "rgba(0, 0, 255, 0.704)"}} /> },
        { label: 'Travel & Outdoor', icon: <ConnectingAirportsIcon className='connecting-airports-icon' style={{color: "green"}} /> },
        { label: 'Social Activities', icon: <Diversity1Icon className='social-activities-icon' style={{color: "purple"}} /> },
        { label: 'Hobbies and Passions', icon: <SailingIcon className='hobbies-icon' style={{color: "#D6B85A"}}/> },
        { label: 'Sports & Fitness', icon: <SportsSoccerIcon className='sports-icon' style={{color: "#00563B"}}/> },
        { label: 'Health & Wellness', icon: <SpaIcon className='health-icon' style={{color: "#AA0000"}}/> },
        { label: 'Art & Culture', icon: <FaceRetouchingNaturalIcon className='arts-icon' style={{color: "#FF0090"}}/> },
        { label: 'Games', icon: <CasinoIcon className='games-icon' style={{color: "#EF0107"}} /> }
    ];

    const [selectedFilter, setSelectedFilter] = useState(null);

    return (
        <div className='top-categories'>
            {categories.map((category, index) => (
                <div 
                    key={index}
                    className={`categories-icon ${selectedFilter === index ? 'selected' : ''}`}
                    onClick={() => {
                        console.log("selecting item", index);
                        setSelectedFilter(index);
                    }}
                >
                    {category.icon}
                    {category.label}
                </div>
            ))}
        </div>
    );
}

export default TopCategories;