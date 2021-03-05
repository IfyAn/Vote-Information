// import React, { Component } from 'react'
// import './Card.css'


// export default class Card extends Component {
//     render() {
        
//         return (
//             <div className='card'>
//                 <div className='blog1'>
//                     <div className="news_headline" > 
//                         <div >
//                             <h3 className='headline_title'>Notice of National Executive Election (NEC)</h3>
//                             <div className='text'>
//                                 <h4>10 hours</h4>
//                                 <h4 className='pd_dot' ></h4>
//                                 <h4>5 min read</h4>
//                             </div>
//                         </div>
//                     </div>
//               </div>
//                 <div className='blog2'>
//                     <div className="news_headline" > 
//                         <div >
//                             <h3 className='headline_title'>Notice of National Executive Election (NEC)</h3>
//                             <div className='text'>
//                             <h4>10 hours</h4>
//                             <h4 className='pd_dot' ></h4>
//                             <h4>5 min read</h4>
//                             </div>
//                         </div>
//                     </div>
//               </div>
//                 <div className='blog3'>
//                     <div className="news_headline" > 
//                         <div >
//                             <h3 className='headline_title'>Notice of National Executive Election (NEC)</h3>
//                             <div className='text'>
//                             <h4>10 hours</h4>
//                             <h4 className='pd_dot' ></h4>
//                             <h4>5 min read</h4>
//                             </div>
//                         </div>
//                     </div>
//               </div>
//                 <div className='blog4'>
//                     <div className="news_headline" > 
//                         <div >
//                             <h3 className='headline_title'>Notice of National Executive Election (NEC)</h3>
//                             <div className='text'>
//                             <h4>10 hours</h4>
//                             <h4 className='pd_dot' ></h4>
//                             <h4>5 min read</h4>
//                             </div>
//                         </div>
//                     </div>
//               </div>
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
    render() {
        const { title, img, time, number, dot } = this.props.Info;
        return (
            <div className='card'>
            <div style={{ backgroundImage: `url(${img})`,  backgroundPosition: 'cover', backgroundSize: '100%' , borderRadius: '20px' }}>
                 {/* <div className=''> */}
                     <div className="news_headline" > 
                         <div>
                         <a rel="stylesheet" href="https://twitter.com/inecnigeria?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><h3 className='headline_title'>{title}</h3></a>
                             <div className='text'>
                                 <h4>{time}</h4>
                                 <h4 className='pd_dot'>{dot}</h4>
                                 <h4>{number}</h4>
                             </div>
                         </div>
                     </div>
               </div>
            </div>
        )
    }
}



            {/* <div className='news_headline_parent' >
            <img src={ img } alt='' className='news_headline' />
                <div className="news_parent" >  
                    <div >
                        <h3 className='headline_title'>{title}</h3>
                        <h4>{time}</h4>
                        <h4 className='.pd_dot' >{dot}</h4>
                        <h4>{number}</h4>
                    </div>
                </div>
            </div> */}
       

