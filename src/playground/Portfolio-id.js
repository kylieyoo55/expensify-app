import React from 'react';

const PortfolioId=(props)=>
{ console.log(props)
    return(
        <div>
            <h1>
                My Work
            </h1>
            {`This is work number ${props.match.params.id}`}
        </div>
    )
}


export default PortfolioId;