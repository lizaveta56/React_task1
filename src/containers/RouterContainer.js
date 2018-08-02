import React from 'react';
import MyRouter from '../views/Router/index';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
	Redirect,
} from 'react-router-dom';
import AboutContainer from './AboutContainer';
import ParentContainer from './ParentCounterContainer';
import NotFound from '../views/NotFound/index';
import Login from './LoginContainer';
import LoginRedux from './LoginReduxContainer';
import LoginReduxForm from './LoginReduxFormContainer';
import LoginSuccess from '../views/Login-Redux/success';
import LoginReduxFormSuccess from '../views/Login-Redux-form/success';
import PropTypes from 'prop-types';

const VIRTUAL_PATH = '/React_task1';
const pathNameTab = [
	{
		pathName: '/React_task1/about',
		activeTabValue: 0,
	},
	{
		pathName: '/React_task1/counters',
		activeTabValue: 1,
	},
	{
		pathName: '/React_task1/login',
		activeTabValue: 2,
	},
	{
		pathName: '/React_task1/login-redux',
		activeTabValue: 3,
	},
	{
		pathName: '/React_task1/login-redux-form',
		activeTabValue: 4,
	},
	{
		pathName: '/React_task1/',
		activeTabValue: false,
	},
];
class RouterContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			activeTabValue: false,
			login: 'anon',
			password: 'anon',
			viewToolbar: true,
		};
	}

	handleChange = (event, value) => {
		this.setState({ activeTabValue: value });
	};

	//пофиксить этот ужас
	componentWillMount() {
		pathNameTab.map(x => {
			if (this.props.history.location.pathname === x.pathName) {
				this.setState({ activeTabValue: x.activeTabValue });
			}
		});
		// if (this.props.history.location.pathname === VIRTUAL_PATH + '/about')
		// this.setState({ activeTabValue: 0 });
		// else if (this.props.history.location.pathname === VIRTUAL_PATH + '/counters')
		// this.setState({ activeTabValue: 1 });
		// else if (this.props.history.location.pathname === VIRTUAL_PATH + '/login')
		// this.setState({ activeTabValue: 2 });
		// else if (
		// this.props.history.location.pathname === VIRTUAL_PATH + '/login-redux'
		// )
		// this.setState({ activeTabValue: 3 });
		// else if (
		// this.props.history.location.pathname === VIRTUAL_PATH + '/login-redux-form'
		// )
		// this.setState({ activeTabValue: 4 });
		// else if (this.props.history.location.pathname === VIRTUAL_PATH + '/')
		// this.setState({ activeTabValue: false });
		// else this.setState({ activeTabValue: false,
		//         viewToolbar: false});
	}

	render() {
		return (
			<Router>
				<div>
					<MyRouter
						activeTabValue={this.state.activeTabValue}
						handleChange={this.handleChange}
						login={this.state.login}
						password={this.state.password}
						viewToolbar={this.state.viewToolbar}
					/>
					<Switch>
						<Route exact path={VIRTUAL_PATH + '/'} component={null} />
						<Route path={VIRTUAL_PATH + '/about'} component={AboutContainer} />
						<Route
							path={VIRTUAL_PATH + '/counters'}
							component={ParentContainer}
						/>
						<Route path={VIRTUAL_PATH + '/login'} component={Login} />
						<Route
							path={VIRTUAL_PATH + '/login-redux/success'}
							component={LoginSuccess}
						/>
						<Route
							path={VIRTUAL_PATH + '/login-redux'}
							component={LoginRedux}
						/>
						<Route
							path={VIRTUAL_PATH + '/login-redux-form/success'}
							component={LoginReduxFormSuccess}
						/>
						<Route
							path={VIRTUAL_PATH + '/login-redux-form'}
							component={LoginReduxForm}
						/>
						<Route path={VIRTUAL_PATH + '/404'} component={NotFound} />
						<Route
							path={VIRTUAL_PATH + '/*'}
							render={() => <Redirect to={VIRTUAL_PATH + '/404'} />}
						/>
						<Route
							path="/*"
							render={() => <Redirect to={VIRTUAL_PATH + '/'} />}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

RouterContainer.propTypes = {
	handleChange: PropTypes.func,
	value: PropTypes.number,
	login: PropTypes.string,
	password: PropTypes.string,
};

export default withRouter(RouterContainer);
