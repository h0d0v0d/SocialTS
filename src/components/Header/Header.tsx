import { HeaderCommonType } from './HeaderApiContainer';
import './header.css'

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
                <button style={{color: 'white', fontSize: '22px', border: 'none', backgroundColor: 'green'}} onClick={props.setting}>Login</button>
            }
        </div>
    );
};

export default Header;