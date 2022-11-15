import {NavLink} from 'react-router-dom'

import './sitebar.css'

const Sitebar = () => {
    return (
        <div className='app-sitebar' >
            <NavLink end to='/' className={({isActive}) => {return isActive ? 'activeNavButton' : 'normalNavButton'}}>Profile</NavLink>
            <NavLink end to='/messages' className={({isActive}) => {return isActive ? 'activeNavButton' : 'normalNavButton'}}>Messages</NavLink>
            <NavLink end to='/news' className={({isActive}) => {return isActive ? 'activeNavButton' : 'normalNavButton'}}>News</NavLink>
            <NavLink end to='/music' className={({isActive}) => {return isActive ? 'activeNavButton' : 'normalNavButton'}}>Music</NavLink>
            <NavLink end to='/settings' className={({isActive}) => {return isActive ? 'activeNavButton' : 'normalNavButton'}}>Settings</NavLink>
        </div>
    );
};

export default Sitebar;