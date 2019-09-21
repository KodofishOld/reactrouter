import React from "react";
import { List, Avatar, Button, Skeleton } from 'antd';
import reqwest from 'reqwest';
import './view.css';


const data = [
    {
        title: 'XXX',
    },
    {
        title: 'OOO',
    },
    {
        title: 'ZZZ',
    },
    {
        title: 'AAA',
    },
];


class Vus extends React.Component{

    render() {
        return(
            <div  className="Menu">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a style={{color:"white"}} href="https://ant.design">{item.title}</a> }
                                description={<a style={{color:"white"}}> 登入</a> }
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default Vus;