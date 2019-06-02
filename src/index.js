import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Books from './components/books.js';


const data = require('./data.json');

ReactDOM.render(

        <React.Fragment>
                <Books data={data} />
        </React.Fragment>,

    document.getElementById('root')
    );



