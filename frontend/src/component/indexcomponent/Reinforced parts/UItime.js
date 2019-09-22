import React from "react";


class UItime extends React.Component{
    state = {
        curTime: null,
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString()
            })
        },1000)
    }

    render() {
        return(
            <div className="clock_wrap">
                <p className="clock_num">{this.state.curTime}</p>
            </div>
        )
    }
}
export default UItime;



