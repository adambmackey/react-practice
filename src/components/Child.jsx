import React from 'react'

const Child = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Child Component</h3>
             <h4>User Input: {props.userInput}</h4>
        </div>
    )

}

export default Child