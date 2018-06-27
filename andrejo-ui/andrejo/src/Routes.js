import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import ServiceDetailsClass from "./containers/ServiceDetailsClass";
import ServiceListClass from "./containers/ServiceListClass";
import ServiceFormClass from "./containers/FormContainer/MenuFormClass";
import ProviderFormClass from "./containers/FormContainer/DishFormClass";
import ProviderListClass from "./containers/UserListClass";
import NotFound from "./containers/NotFound";

class Routes extends Component {
    render() {

        const routes = <Switch>
            <Route path="/providers" exact component={ProviderListClass}/>
            <Route path="/service/details/:name" exact component={ServiceDetailsClass}/>
            <Route path='/service/provider/register' exact component={ProviderFormClass}/>
            <Route path='/service/provider/register/:name' exact component={ProviderFormClass}/>
            <Route path='/service/register' exact component={ServiceFormClass}/>
            <Route path='/service/register/:name' exact component={ServiceFormClass}/>
            <Route path='/' exact component={ServiceListClass}/>
            <Route path='*' component={NotFound}/>
        </Switch>;
        return <div>{routes}</div>
    }
}

export default withRouter(Routes);
