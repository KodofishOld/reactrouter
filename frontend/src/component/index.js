import React from "react";
import axios from 'axios';
import './index.css';
import Example from "./indexcomponent/Recharts/SimpleLineChart";
import Sta from "./indexcomponent/numsimple/num";
import UI from "./indexcomponent/Reinforced parts/UI";
import Vus from "./indexcomponent/Listview/view";




class index extends React.Component {

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

        function article(article){
            return(
                <div key={article.id}>
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                </div>
            )
        }

        function articleList(articles) {
            if(articles.length === 0){
                return ("empty");
            }
            const result = [];
            articles.forEach((item) => {
                result.push(article(item));
            });
            return(<div>{result}</div>)
        }

        return(
            <div>
                <div>
                    <UI />
                </div>
                <div>
                    <Example />
                </div>
                <div>
                    <Sta />
                </div>
                <div>
                    <Vus />
                </div>
            </div>
        );
    }

}

export default index;
/*{articleList(this.state.articles)}*/