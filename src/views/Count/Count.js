import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HeadCount from '../../components/HeadCount/HeadCount'
import Text from '../../components/Text/Text'

export default class Count extends Component  {
      constructor(props) {
            super(props);
            this.state = {
              persons: [
                    {id:1, individual: 'Adewale Jerry - Vs24Afsa' ,letter: 10}, 
                    {id:2, individual: 'Aminat Usman - Udw19K3q', letter:20} 
                  ],
            };
          }        
      render(){
        const {individual, letter}= this.state
      return (
            <div>
            <HeadCount dote='Result- Olamide Sharon'/>
            <Text head='Olamide Sharon' body='Name of candidate' />
            <Text head='645' body='Number of vote' />
            <Text head='45%' body='Vote percentage' />
                <section className='table'>
                  <div  className='bld'>
                        <div className='vote_table'>
                              <h1 className='vt1'>List of voters</h1>
                        </div>
                  </div>
                  <div >
                        {this.state.persons.map(person=>{
                          return(
                                    <div key={person.id} className='vote_tab'>
                                          <h3 className='vt12'><span className="elec_cand_no">{person.letter}</span> {person.individual} </h3>
                                    </div>
                                 )
                            } 
                        )}
                  </div>
                  </section>
            </div>
      )
   }
}

// import React from 'react'
// import { Link } from 'react-router-dom'
// import HeadCount from '../../components/HeadCount/HeadCount'
// import Text from '../../components/Text/Text'

// export default function Count() {
//       return (
//             <div>
//             <HeadCount dote='Election Result'/>
//             <Text head='Ondo State Primaries' body='Last Update=20 Oct 2020' />
//             <Text head='1,350' body='Total number of vote' />
//                 <section className='table'>
//                   <div  className='bld'>
//                   <div className='vote_table'>
//                         <h1 className='vt1'>Candidate</h1>
//                         <h1 className='vt2'>Vote Count</h1>
//                         <h1 className='vt3'>Vote%</h1>
//                   </div>
//                   </div>
//                   <div className='vote_tab'>
//                         <h1 className='vt1'><span className="elec_cand_no">1</span><Link to="/Count">Olamide Sharon</Link> </h1>
//                         <h1 className='vt2'>645</h1>
//                         <h1 className='vt3'>56%</h1>
//                   </div>
//                   <div className='vote_tab'>
//                         <h1 className='vt1'><span className="elec_cand_no">2</span>  Solomonm Philips</h1>
//                         <h1 className='vt2'>345</h1>
//                         <h1 className='vt3'>21.1%</h1>
//                   </div>
//                   </section>
//             </div>
//       )
// }
