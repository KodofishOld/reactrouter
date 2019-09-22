import React from "react";
import { Card } from 'antd';
import Lampui from "./Lampcompent/LUI";
import Geography from "./Lampcompent/charts/Geography";
import Pier from "./Lampcompent/charts/Piechart";
import Comp from "./Lampcompent/charts/composed";

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




class Lamp extends React.Component{
    state = {
        key: 'tab1',
        noTitleKey: 'app',
    };

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };
    render() {
        return(
            <div>
                <div>
                    <Lampui />
                </div>
                <div className="cards">
                    <Card
                        style={{ width: '50%',textAlign:'center',position:'absolute',top:'30%',left:'25%'}}
                        title="Primary Power"

                        tabList={tabList}
                        activeTabKey={this.state.key}
                        onTabChange={key => {
                            this.onTabChange(key, 'key');
                        }}
                    >
                        {contentList[this.state.key]}
                    </Card>
                </div>
            </div>

        )
    }

}

export default Lamp ;

