import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'


const App =() => {
    const [data, setData] = useState(false);

    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=50&type=boolean")
            .then(response => {
                console.log(response.data.results[0]);
            });
    }, []);

    if (data === true) {
        console.log(data)
    } else {
        return <h1>Ustalam adres IP...</h1>

    }

}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

