import React from "react";
import { List, Avatar } from 'antd';

const data = [
    {
        title: 'user1',
        title2: 'user1',
    },
    {
        title: 'user2',
    },
    {
        title: 'user3',
    },
    {
        title: 'user4',
    },
];

const background = require('./iamge/01.PNG');

class Time extends React.Component {
    render() {
        return(
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant"
                        />
                    </List.Item>
                )}
            />
        )
    }
}
export default Time;

