import React, {Componnent} from 'react'

export default class ClassComponent extends Components {
    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
    }
   
   sum(delta) {
        this.setState({...this.state, value: this.state.value + delta})
   }
   
    render(){
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>dec</button>
                <button onClick={() => this.sum(1)}>inc</button>

            
            </div>
        )
    }
} 