import React from 'react'
import { Alert } from 'react-bootstrap'


function ErrorSearch (){

    
        return (      
            
                    <Alert className='alertaSearch text-light' variant="secondary">
                    <Alert.Heading>No results found.</Alert.Heading>
                    <p>
                       try something else.
                    </p>
                    </Alert>
        )


}

export default ErrorSearch