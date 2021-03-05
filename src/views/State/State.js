import React from 'react'
import './State.css'
import { Link } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'

export default function State() {
      return (
            <div>
            <Heading dote='NYPD State Admins'/>
            <div className='upelection_cover'>
                
                  <button className='upelection_details_div'><Link to="/Result">Abia</Link></button>
                  <button className='upelection_details_div'>Adamawa</button>
                  <button className='upelection_details_div'>Akwa Ibom</button>
                  <button className='upelection_details_div'>Anambra</button>
            </div>
            <div>
                  <button className='seemore'>See more</button>
            </div>
            
            </div>
      )
}
