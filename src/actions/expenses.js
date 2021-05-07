import { v4 as uuidv4 } from 'uuid';


//add_expense
export const addExpense=({
    description='',
    note='',
    amount=0,
    createAt=0
}={})=>({
type:'add_expense',

expense:{
    id:uuidv4(),
    description,
    note,
    amount,
    createAt
}
})

// remove_expense

export const removeExpense=({id})=>(
    {
        type:'remove_expense',
        id
    }
)

//edit_expense
export const  editExpense=(id,updates)=>(
    {
        type:'edit_expense',
        id,
        updates
    }
)