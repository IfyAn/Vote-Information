import React from 'react'
import './Vote.css'
import { Link } from 'react-router-dom'
import Head from '../../components/Head/Head'

export default function Vote() {
      return (
            <div>
            <Head dote='Vote'/>
            <div className='upelection_cover'>
                  <h1 className='upcoming_election'>Upcoming Elections</h1>
                  <button className='upelection_details_div'><Link to="/state">NYPD State Admin</Link></button>
                  <button className='upelection_details_div'>Lagos State Primaries</button>
            </div>
            <div>
                  <button className='seemore'>See More</button>
            </div>
            <div className='pastelection_cover '>
                  <h1 className='upcoming_election'>Past Elections</h1>
                  <button className='upelection_details_div'><Link to="/Result">Ondo state Primaries</Link></button>
                  <button className='upelection_details_div'>Kano State Primaries</button>
            </div>
            </div>
      )
}
