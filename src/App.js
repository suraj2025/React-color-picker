import React from "react";

for (var i = 3; i < document.querySelectorAll('div').length - 1; ++i) {
  document.querySelectorAll('div')[i].addEventListener("click", function () {
    var newClass = this.id;
    document.querySelector('button').id=newClass;
    document.querySelector('button').innerHTML=newClass;
  });
}

function App() {

  return (

    <center>
      <h1>Colour Picker</h1>
      <div className="box">
        <div className="box1">
          <div id="indigo"></div>
          <div id="orange"></div>
          <div id="maroon"></div>
          <div id="olive"></div>
          <div id="voilet"></div>
          <div id="wheat"></div>
          <div id="pink"></div>
          <div id="yellow"></div>
          <div id="red"></div>
          <div id="aqua"></div>
          <div id="black"></div>
          <div id="blue"></div>
          <div id="chocolate"></div>
          <div id="darkgreen"></div>
          <div id="darkblue"></div>
          <div id="darkvoilet"></div>
          <div id="brown"></div>
          <div id="cblue"></div>
          <div id="corol"></div>
        </div>
        <div className="button" ><button id='btn'>Pick A Colour</button></div>

      </div>
    </center>

  );
}
export default App;
