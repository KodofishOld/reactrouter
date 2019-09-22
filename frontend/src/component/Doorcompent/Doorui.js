import React from "react";


const background = require('./image/tec.jpg');

class Doorui extends React.Component{
    render() {
        return (
            <div>
                <img className="img" src={background}/>
            </div>
        )
    }
}
export default Doorui;