import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Card from '../../components/Card/Card'
import { InformationsData } from '../../components/InformationsData'

export default class Home extends Component {
    state={
        Infos:InformationsData
    }

    render(){
        const { Infos }=this.state; 
        return (
            <div className='home'>
                <Header />
                <Title />
               <div className='card'>
               {Infos.map(Info=>{
                   return  <Card key={Info.id} Info={ Info } />
               })}
               </div>
                <div className='main_buttons'>
                    <button className='main_buttons_div'><Link to="/Vote">Vote</Link></button>
                    <button className='main_buttons_div'><Link to="/candidate">Profile</Link></button>
                    <button className='main_buttons_div'>Petitions</button>
                    <button className='main_buttons_div'>Donate</button>
                    <button className='main_buttons_div'>Payments</button>
                    <button className='main_buttons_div'>Settings</button>
                </div>
                <div className='main_footer'>Made with love by Nigeria all over the world</div>
         </div>
        )
    }
}
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import './Home.css'
// import Header from '../../components/Header/Header'
// import Title from '../../components/Title/Title'
// import Card from '../../components/Card/Card'

// export default class Home extends Component {
//     render(){
//         return (
//             <div>
//                 <Header />
//                 <Title />
//                 <Card />
//                 <div className='main_buttons'>
//                     <button className='main_buttons_div'><Link to="/Vote">Vote</Link></button>
//                     <button className='main_buttons_div'>Petitions</button>
//                     <button className='main_buttons_div'>Donate</button>
//                     <button className='main_buttons_div'>Payments</button>
//                     <button className='main_buttons_div'>Profile</button>
//                     <button className='main_buttons_div'>Settings</button>
//                 </div>
//                 <div className='main_footer'>Made with love by Nigeria all over the world</div>
//             </div>
//         )
//     }
// }

// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Home() {
//     return (
//         <div>
//             HOME

//             <hr />
//             <p>Avaliable pages</p>
//             <button><Link to="/login">Login</Link></button>

//         </div>
//     )
// }
