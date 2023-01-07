import { HeaderCommonType } from './HeaderApiContainer';
import './header.css'
import { NavLink } from 'react-router-dom';

const Header: React.FC<HeaderCommonType> = (props) => {
    return (
        <div className='app-header'>
            {
                props.isAuth 
                ? 
                <div className='user-login-info'>
                    <img src={props.photo} alt="" />
                    <h2>{props.login}</h2>
                </div>
                : 
                <NavLink style={{color: 'white', fontSize: '22px', border: 'none', backgroundColor: 'green'}} to='/login'>Log in</NavLink>
            }
        </div>
    );
};

export default Header;