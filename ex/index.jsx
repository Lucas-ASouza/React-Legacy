import React from "react";
import ReactDOM from "react";
import Component from './ClassComponent'
import Field from "./Field";

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
    field: () => ({ value: 'Hey'})
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <Field initialValue='Test'></Field>
   </Provider>)

ReactDOM.render(
    <div>
        <Component label="Counter" initialValue={10}></Component>
    </div>
   , document.getElementById('app'))

 
