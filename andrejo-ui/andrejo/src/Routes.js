import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import ServiceDetailsClass from "./containers/ServiceDetailsClass";
import ServiceListClass from "./containers/ServiceListClass";
import MenuFormClass from "./containers/FormContainer/MenuFormClass";
import DishFormClass from "./containers/FormContainer/DishFormClass";
import ClientFormClass from "./containers/FormContainer/ClientFormClass";
import UserListClass from "./containers/UserListClass";
import NotFound from "./containers/NotFound";

class Routes extends Component {
    render() {

        const routes = <Switch>
            <Route path="/users" exact component={UserListClass}/>
            <Route path="/service/details/:name" exact component={ServiceDetailsClass}/>
            <Route path='/user/register' exact component={ClientFormClass}/>
            <Route path='/user/register/:name' exact component={ClientFormClass}/>
            <Route path='/dish/register' exact component={DishFormClass}/>
            <Route path='/dish/register/:name' exact component={DishFormClass}/>
            <Route path='/menu/register' exact component={MenuFormClass}/>
            <Route path='/menu/register/:name' exact component={MenuFormClass}/>
            <Route path='/' exact component={ServiceListClass}/>
            <Route path='*' component={NotFound}/>
        </Switch>;
        return <div>{routes}</div>
    }
}

export default withRouter(Routes);
