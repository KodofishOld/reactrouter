import React from "react";
import { Card } from 'antd';

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
];

const contentList = {
    tab1: <p>123</p>,
    tab2: <div className="cur">360</div>,
    tab3: <p>456</p>
};




class Power extends React.Component{
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
                <Card
                    style={{ width: '100%' }}
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

        )
    }

}

export default Power;

