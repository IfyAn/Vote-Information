import React from 'react';
import './HeadResult.css';
import Group2 from '../../img/Group2.png';
import profile_pic_default from '../../img/profile_pic_default.png'
import { Link } from 'react-router-dom'


export default function HeadResult({dote}) {
    return (
        <div>
            <div className='vote_nav '>
            <Link to="/Vote"><img src={ Group2 } alt="One Nigeria" className='back_btn' /></Link>
                <h2 className='vote_nav_text'>{dote}</h2>
                <img src={profile_pic_default} alt="Profile Pic" className='profile_pic'  />
            </div>
        </div>
    )
}
