import React from 'react';

import { Link } from 'react-router-dom';

//export a staless function component
//description,amount,createAt showing on Screen




const ExpenseListItem = ({id, description, amount, createAt})=>

    (
<div  >
<Link to={`/edit/${id}`}>
<h2>Expense List Item</h2>
</Link>
<p>{description}</p>
<p>Amount: {amount}- Created: {createAt}</p>

</div>
)


export default ExpenseListItem;