import React from "react";

export default props => {
    return <div>
        <h1>Family</h1>
        {React.Children.map(
            props.children,
            child => React.
            cloneElement(child, 
            {...props}))}
    </div>
}