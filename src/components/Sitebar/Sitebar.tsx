import { useState } from 'react';
import {NavLink} from 'react-router-dom'

import './sitebar.css'

const Sitebar = () => {
    
    const [navButtonData, setNavButtonData] = useState([
        {id: '1', way: '/', name: 'Profile', active: true},
        {id: '2', way: '/messages', name: 'Messages', active: false},
        {id: '3', way: '/users', name: 'Users', active: false},
        {id: '4', way: '/news', name: 'News', active: false},
        {id: '5', way: '/music', name: 'Music', active: false},
        {id: '6', way: '/settings', name: 'Settings', active: false},
    ])

    const changeActiveNavButton = (id: string) => {
        setNavButtonData(navButtonData.map(b => b.id === id ? {...b, active: true} : {...b, active: false}))
    }

    return (
        <div className='app-sitebar' >
            {
                navButtonData.map((b) => {
                    let classs = `nav-button ${b.active ? 'activee' : 'normall'}`
                    let wrappClass = `nav-button-wrapper ${b.active ? 'activee-wrap' : 'normall-wrap'}`
                    return (
                        <div className={wrappClass}
                             key={b.id}
                             onClick={() => {changeActiveNavButton(b.id)}}>
                            <NavLink end
                                     to={b.way}
                                     className={classs}>{b.name}</NavLink>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Sitebar; 


