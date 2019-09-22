import React from "react";
import { Drawer, Button } from 'antd';

class Draws extends React.Component{
    state = { visible: false };

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
    render() {
        return(
            <div>
                <Button type="primary" onClick={this.showDrawer}>
                    Open
                </Button>
                <Drawer
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        )
    }
}
export default Draws;