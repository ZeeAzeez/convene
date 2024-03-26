import React from 'react';
import "./style.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


function MobileSearchBar(){
    return (
        <div className='mobile-search-bar'>
          <div className='search-bar'> 
            <div className='search-bar-texts1'>
            <SearchRoundedIcon className='search-events-icon'/>
                Search events</div>
            <div className='search-bar-texts'> Lagos, NG</div>
            <div className='search-icon-div'>
                <SearchRoundedIcon className='search-icon'/>
                </div>
            </div> 
        </div>
    )
}

export default MobileSearchBar;