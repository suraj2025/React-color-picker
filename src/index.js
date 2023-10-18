import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
var Colour=["indigo","orange","maroon","olive","violet","wheat","pink","yellow","red","aqua","black","blue","chocolate","darkgreen","darkblue","darkviolet","brown","cadetblue","coral"]

ReactDOM.render(
 <App props={Colour}/>,document.getElementById('root')
);



