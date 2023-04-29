import { reduxForm } from 'redux-form'

import LoginForm from "./LoginForm";

export const LoginFromContainer = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginFromContainer