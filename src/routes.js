import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import AccountList from './components/account_list';
import PlanningList from './components/planning_list';
import PlanningEdit from './components/planning_edit';
import AccountShow from './components/account_show';
import AccountEdit from './components/account_edit';
import HelloModalDialog from './components/HelloModalDialog';

export default (
	<Route path ="/" component={App}>
	<IndexRoute component={AccountList} />
		<Route path="planninglist" component = {PlanningList} />
		<Route path="hello" component = {HelloModalDialog} />
		<Route path="api/accounts/:id" component={AccountShow} />
		<Route path="planning/edit/:id" component={PlanningEdit} />
		<Route path="/edit/:id" component={AccountEdit} />
	</Route>

	);