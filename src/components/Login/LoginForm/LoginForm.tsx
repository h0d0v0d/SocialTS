import { Field } from 'redux-form';

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="login-wrapp">
                <Field placeholder='Login' component={'input'} name={'login'}/>
            </div>
            <div className="passsword-wrapp">
                <Field placeholder='Password' component={'input'} name={'password'}/>
            </div>
            <div className="remember-me-wrapp">
                <Field component={'input'} type='checkbox' name={'rememberMe'}/> remember me
            </div>
            <div className="login-button-wrapp">
                <button>Log in</button>
            </div>
        </form>
    );
};

export default LoginForm;