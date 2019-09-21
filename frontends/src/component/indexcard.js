import React from "react";
import './indexcardcss.css';


class indexcard extends React.Component{
    render() {
        return(
            <div className="conatiner">
                <button className = "btn btn1">Hover me</button>
                <button className = "btn btn2">Hover me</button>
                <button className = "btn btn3">Hover me</button>
                <button className = "btn btn4">Hover me</button>
            </div>
        )
    }
}
export default indexcard;