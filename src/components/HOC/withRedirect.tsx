import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootStateType } from '../../redux/store';

const mapStateToProps = (state: RootStateType) => {
    return { isAuth: state.auth.isAuth }
}

const withRedirect = (BaseComponent: any) => {

    const WithComponent= (props: any) => {
        return !props.isAuth ? <Navigate to='/login'/> : <BaseComponent {...props}/>
    }

    const ConnectWithComponent = connect(mapStateToProps)(WithComponent)

    return ConnectWithComponent
};

export default withRedirect; 