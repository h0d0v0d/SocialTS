import { LoginPageCommonType } from './LoginPageApiContainer';

const LoginPage: React.FC<LoginPageCommonType> = (props) => {
    return (
        <div>
            Login
            <button  onClick={props.setting}>Login</button>
        </div>
    );
};

export default LoginPage;