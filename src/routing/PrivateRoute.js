import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import routes from './routes';

const PrivateRoute = ({ children, ...rest }) => {
    const { isAuth } = useSelector(state => state.auth);
	return (
        <Route
		    {...rest}
		    render={() =>
                isAuth ? (
                    children
                ) : (
                    <Redirect to={routes.main} />
                )
		    }
	    />
    )
};

export default PrivateRoute;
