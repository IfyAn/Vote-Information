import React from 'react';
import './Header.css';
import one_nigeria_logo from '../../img/one_nigeria_logo.png';
import profile_pic_default from '../../img/profile_pic_default.png'


export default function Header() {
    return (
        <div>
            <div className='home_nav '>
                <img src={ one_nigeria_logo } alt="One Nigeria" className='logo_pic' />
                <img src={profile_pic_default} alt="Profile Pic" className='profile_pic'  />
            </div>
        </div>
    )
}
