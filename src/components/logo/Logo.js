import React from 'react';
import { Link } from 'react-router-dom';
import oneNigeriaLogo from '../../img/one_nigeria_logo.png';
import './logo.css';

export default function Logo() {
    return (
        <div className="logo">
           <Link to="/"><img src={oneNigeriaLogo} alt="logo"/></Link> 
        </div>
    )
}
