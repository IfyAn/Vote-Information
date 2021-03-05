import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Candidate.css'
import Group2 from '../../img/Group2.png';
import Download from '../../img/Download.jpg';

export default class Candidate extends Component  {
      constructor(props) {
            super(props);
            this.state = {
              person:  {
                          id:1, 
                          individual: 'Solomomn Philips' ,
                          letter:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus officiis iusto libero eligendi quaerat quasi aperiam. Velit, sit provident. Aliquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus officiis iusto libero eligendi quaerat quasi aperiam. Velit, sit provident. Aliquam!', 
                         text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus officiis iusto libero eligendi quaerat quasi aperiam. Velit, sit provident. Aliquam!',
                        }, 
            };
          }        
      render(){
      //   const { person }= this.state
      return (
            <div className='cand_prodetails_cover'>
                  <div className="candidate_pro_pic">
                        <div className="candidate_pro_pic">
                        <div className="back_btn">
                        <Link to="/"><img src={ Group2 } alt="One Nigeria" className='back_btn' /></Link>
                        </div>
                              <img src={ Download } alt="One Nigeria" className='candidate_pro_pic img' />
                        </div>
                        <div class="cand_name">{this.state.person.individual}</div>
                  </div>
                  <div className="second_prod">
                        <h1 className="sec_prod_title">Biography</h1>
                        <h2>{this.state.person.letter}</h2>
                        <div className="readmore"><h1>Read more</h1></div>
                        <h1 className="sec_prod_title">Qualification</h1>
                        <h2>{this.state.person.text}</h2>
                        <h1 className="sec_prod_title">Attachments</h1>
                        <div className="attach"><h1>{this.state.person.individual}</h1></div>
                        <div className="vote_btn">Vote</div>
                  </div>
            </div>
      )
   }
}