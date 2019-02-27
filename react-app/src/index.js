import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 在入口文家中引入,其他问价都会被拦截
import './Mock/mock'

ReactDOM.render(<App />, document.getElementById('root'));
