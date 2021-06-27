import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import routes from './routes';
import ErrorBoundary from './ErrorBoundary';
import PrivateRoute from './PrivateRoute';
import HomePage from '../Containers/HomePage';
import Header from '../Components/Header';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const componentRoute = [
	{
		path: routes.main,
		component: <HomePage />,
		exact: true,
	},
	// {
	// 	path: routes.football,
	// 	exact: true,
	// },
	// {
	// 	path: routes.backetball,
	// 	exact: true,
	// },
	// {
	// 	path: routes.hockey,
	// 	exact: true,
	// },
];

const componentRoutePrivate = [
	// {
	// 	path: routes.profile,
	// 	exact: true,
	// },
];


const Routers = () => {
	return (
			<ErrorBoundary>
				<Suspense
					fallback={
						<Spin
							indicator={antIcon}
							style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
						/>
					}
				>
					<Header />
					<Router>
						<Switch>
							{componentRoutePrivate.map((route, index) => (
								<PrivateRoute key={index} path={route.path} exact={route.exact}>
										{route.component}
								</PrivateRoute>
							))}
							{componentRoute.map((route, index) => (
								<Route key={index} path={route.path} exact={route.exact}>
										{route.component}
								</Route>
							))}
							<Route>
								<Redirect to={routes.main} />
							</Route>
						</Switch>
					</Router>
				</Suspense>
			</ErrorBoundary>
	);
};

export default Routers;
