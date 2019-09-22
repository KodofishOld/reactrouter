import React from "react";
import './Layout.css';
import { Layout, Menu, Breadcrumb, Icon,Avatar } from 'antd';
import Lamp from "../component/Lamp";
import {Link, Route} from "react-router-dom";
import Power from "../component/Power";
import Warm from "../component/Warm";
import Door from "../component/Door";
import index from "../component";


class CustomLayout extends React.Component{


    render() {
        return(
            <div>
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger">
                        <div>

                        </div>
                    </div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/">
                                        <Icon type="home" />
                                        <span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Lamp">
                                        <Icon type="bulb" />
                                        <span>Lamp</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Door">
                                        <Icon type="bank" />
                                        <span>Door</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Warm">
                                        <Icon type="alert" />
                                        <span>Warm</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <div>
                        <Route exact path="/" component={index} />
                        <Route exact path="/Lamp" component={Lamp} />
                        <Route exact path="/Power" component={Power} />
                        <Route exact path="/Warm" component={Warm} />
                        <Route exact path="/Door" component={Door} />
                    </div>
            </div>
        )
    }
}


export default CustomLayout;