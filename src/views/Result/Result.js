import React from 'react'
import './Result.css'
import { Link } from 'react-router-dom'
import HeadResult from '../../components/HeadResult/HeadResult'
import Text from '../../components/Text/Text'

export default function Count() {
      return (
            <div>
            <HeadResult dote='Election Result'/>
            <Text head='Ondo State Primaries' body='Last Update=20 Oct 2020' />
            <Text head='1,350' body='Total number of vote' />
                <section className='table'>
                  <div  className='bld'>
                  <div className='vote_table'>
                        <h1 className='vt1'>Candidate</h1>
                        <h1 className='vt2'>Vote Count</h1>
                        <h1 className='vt3'>Vote%</h1>
                  </div>
                  </div>
                  <div className='vote_tab'>
                        <h1 className='vt1'><span className="elec_cand_no">1</span><Link to="/Count">Olamide Sharon</Link> </h1>
                        <h1 className='vt2'>645</h1>
                        <h1 className='vt3'>56%</h1>
                  </div>
                  <div className='vote_tab'>
                        <h1 className='vt1'><span className="elec_cand_no">2</span>  Solomonm Philips</h1>
                        <h1 className='vt2'>345</h1>
                        <h1 className='vt3'>21.1%</h1>
                  </div>
                  </section>
            </div>
      )
}


// import React, { Component } from 'react'
// import './Result.css'
// import { Link } from 'react-router-dom'
// import HeadResult from '../../components/HeadResult/HeadResult'
// import Text from '../../components/Text/Text'

// export default class Result extends Component {
//       constructor(props) {
//             super(props);
//             this.state = {
//               persons: [
//                     {id:1, individual: 'Olamide Sharon', num: 645, per:'56%' ,letter: 1}, 
//                     {id:2, individual: 'Solomomn Philips', num:345, per:'21.1%', letter:2} 
//                   ],
//             };
//           }        
//       render(){
//         const {individual, num, per, letter}= this.state
//       return (
//             <div>
//             <HeadResult dote='Election Result'/>
//             <Text head='Ondo State Primaries' body='Last Update=20 Oct 2020' />
//             <Text head='1,350' body='Total number of vote' />
//                 <section className='table'>
//                   <div  className='bld'>
//                         <div className='vote_table'>
//                               <h1 className='vt1'>Candidate</h1>
//                               <h1 className='vt2'>Vote Count</h1>
//                               <h1 className='vt3'>Vote%</h1>
//                         </div>
//                   </div>
//                   <div >
//                         {this.state.persons.map(person=>{
//                           return(
//                                     <div key={person.id} className='vote_tab'>
//                                           <h1 className='vt1'><span className="elec_cand_no">{person.letter}</span><Link to="/Count">{person.individual}</Link> </h1>
//                                           <h1 className='vt2'>{person.num}</h1>
//                                           <h1 className='vt3'>{person.per}</h1>
//                                     </div>
//                                  )
//                             } 
//                         )}
//                   </div>
//                   </section>
//             </div>
//       )
//    }
// }
