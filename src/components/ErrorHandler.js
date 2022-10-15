import React from 'react'

const ErrorHandler = ({error}) => {
    return (
        <div>
            
           <h1>An error occurred:</h1>
            <p>{error.message}</p>
        
        </div>
    )
}

export default ErrorHandler
