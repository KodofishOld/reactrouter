import React from "react";
import { Statistic } from 'antd';
import './UI.css'
import UItime from "./UItime";

const background = require('./iamge/tec.jpg');
const i2 = require('./iamge/br.png');

class Box extends React.Component{
    render() {
        return(
           <div>
               <img className="img" src={background}/>
               <div className="temp" style={{paddingTop:200,paddingLeft:150}}>
                   <div className="t1">
                       <h1>
                           4℃ <img className="br" src={i2}/>
                       </h1>
                   </div>
                   <div className="time">
                       <UItime />
                   </div>
                   <div className="t2">
                       <h5>濕度</h5>
                       <p>91％</p>
                   </div>
                   <div className="t3">
                       <h5>空氣品質</h5>
                       <p>良好</p>
                   </div>
               </div>
           </div>
        )
    }
}
export default Box;
