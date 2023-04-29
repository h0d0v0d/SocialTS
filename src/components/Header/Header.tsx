import { NavLink } from 'react-router-dom';

import './header.css'
import { useAppSelector } from '../../redux/store';

export const Header: React.FC = () => {

    const {isAuth, photo, login} = useAppSelector(state => state.auth)

    return (
        <div className='app-header'>
            {
                isAuth 
                ? 
                <div className='user-login-info'>
                    <img src={photo} alt="" />
                    <h2>{login}</h2>
                </div>
                : 
                <NavLink style={{color: 'white', fontSize: '22px', border: 'none', backgroundColor: 'green'}} to='/login'>Log in</NavLink>
            }
        </div>
    );
};