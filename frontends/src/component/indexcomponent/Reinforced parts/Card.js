import React from "react";
import './Cardcss.css';
import { Carousel,Card } from 'antd';
import axios from "axios";
import UI from "./UI";


const background = require('./iamge/01.PNG');
const background2 = require('./iamge/02.PNG');
const background3 = require('./iamge/03.PNG');
const background4 = require('./iamge/04.PNG');




class Card_ extends React.Component{
    state = {
        data_loaded : false,
        articles: []
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data,
                    data_loaded : true
                });
                console.log(res.data)
            })
    }


    render() {
        return (
            <h1>123</h1>
        )
    }
}
export default Card_;
/*<h1>目前登入時間</h1><br/>
  <h2>12:13AM</h2>          */