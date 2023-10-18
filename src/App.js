import React, { useState } from "react";
function displayColor() {
  for (var i = 3; i < document.querySelectorAll('div').length - 1; ++i) {
    document.querySelectorAll('div')[i].addEventListener("click", function () {
      var newId = this.id;
      document.querySelector("button").style.background = newId;
      document.querySelector('button').innerHTML = newId;
    });
  }
}
function showOption(color){
  displayColor();
  return (
    <div id={color} ></div>
  );
}

function App({props}) {
  
  const [isVisible,isvalid]=useState(false);
  return (

    <center>
      <h1>Colour Picker</h1>
      <div className="box">
        <div className="box1" style={{visibility:isVisible? "visible":"hidden"}}>
          {props.map(showOption)}
        </div>
        <div className="button" ><button id='btn' onClick={()=>isvalid(true)}>Pick A Colour</button></div>

      </div>
    </center>

  );
}
export default App;
