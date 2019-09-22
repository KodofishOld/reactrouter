import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import index from "./component";
import Door from "./component/Door";
import Lamp from "./component/Lamp";
import Power from "./component/Power";
import Warm from "./component/Warm";

const RootRouter = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={index} />
                    <Route path="/Door" component={Door} />
                    <Route path="/Lamp" component={Lamp} />
                    <Route path="/Power" component={Power} />
                    <Route path="/Warm" component={Warm} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default RootRouter;