import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Practices } from './Practices.jsx'
import {App} from './App.jsx';
import "./index.css";
//import Profile from './Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   {  /*  <Practices /> */}
  <App /> 
   {  /*<Profile />  */}
 </React.StrictMode>

 
);
