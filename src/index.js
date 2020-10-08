import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Main} from './components/Main'
import axios from 'axios'


const App =() => {
    const [data, setData] = useState(false);

    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=50&type=boolean")
            .then(response => {
                console.log(response.data.results[0]);
            });
    }, []);

    return <Main />

}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

