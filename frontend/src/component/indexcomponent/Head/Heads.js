import React from "react";
import {Avatar, Icon, Drawer, Button, Radio, Card} from "antd";
import './Heads.css';
import Geography from "../../Lampcompent/charts/Geography";
import Pier from "../../Lampcompent/charts/Piechart";
import Comp from "../../Lampcompent/charts/composed";
import Draws from "./Draws";

const RadioGroup = Radio.Group;
const tabList = [
    {
        key: 'tab1',
        tab: 'contrast',
    },
    {
        key: 'tab2',
        tab: 'current',
    },
    {
        key: "tab3",
        tab: 'electric device'
    },
    {
        key: "tab4",
        tab: 'table Lamp'
    },
];

const contentList = {
    tab1: <div className="cur"><Geography /></div>,
    tab2: <div className="cur"><Pier /></div>,
    tab3: <div className="cur"><Comp /></div>,
    tab4: <div className="cur" style={{fontSize:72}}>ON/OFF</div>,
};


class Heads extends React.Component{
    state = { visible: false, placement: 'right'};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        return(
            <div>
                <div className="icon">
                    <Avatar size="large" icon="user" />
                </div>
                <div className="icon2">
                    <Icon type="logout" style={{fontSize:36,color:'White'}}/>
                </div>
                <div className="icon3">
                    <Draws />
                </div>
            </div>
            /*<Icon type="tool" />*/
        )
    }
}
export default Heads;