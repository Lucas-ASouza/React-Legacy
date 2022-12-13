import React from "react";
import ReactDOM from "react";
import Component from './Component'

ReactDOM.render(
    <div>
        <Component label="Counter" initialValue={10}></Component>
    </div>
   , document.getElementById('app'))


