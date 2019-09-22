import React from "react";
import './Sta.css';
import { Statistic, Icon,Card } from 'antd';


class Sta extends React.Component{
    render() {
        return(
            <div>
                <div className="box1">
                    <p>Active</p>
                    <Statistic
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<Icon type="arrow-up" />}
                        suffix="%"
                    />
                </div>
                <div className="box2">
                    <p>Idle</p>
                    <Statistic
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#3498db' }}
                        prefix={<Icon type="minus" />}
                        suffix="%"
                    />
                </div>
                <div className="box3">
                    <p>Idle</p>
                    <Statistic
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<Icon type="arrow-down" />}
                        suffix="%"
                    />
                </div>
            </div>

        )
    }
}
export default Sta;