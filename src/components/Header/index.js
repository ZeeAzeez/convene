import React from 'react';
import logo from "../../assets/logo/convene-logo.png";
import "./style.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import SimpleBottomNavigation from './BottomNav';
import MobileSearchBar from '../MobileSearchBar';

function Header(){
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className='navbar-logo' />
            <div className='search-bar'> 
            <div className='search-bar-texts1'>
            <SearchRoundedIcon className='search-events-icon'/>
                Search events</div>
            <div className='search-bar-texts'> Lagos, NG</div>
            <div className='search-icon-div'>
                <SearchRoundedIcon className='search-icon'/>
                </div>
            </div> 
            <div className='profile-container'>
                <div className="Admin-profile">
                <AdminPanelSettingsRoundedIcon sx={{fontSize: "1.4rem"}} className='admin-icon'/>
                    Admin
                    </div>
                <div className="profile-div">
                    <div className='login'>Login</div>
                    <div className='sign-up'>Sign up</div>
                </div>
            </div>
            <MobileSearchBar />
           <SimpleBottomNavigation />
        </div>
    )
}


export default Header;