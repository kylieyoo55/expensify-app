import expenseReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixture/expenses';
import { addExpense } from '../../actions/expenses';


test('should set default state',()=>{
    const state=expenseReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([])
});

//Remove by ID
test('shoulc remove expense by id',()=>{
    const action={
        type: 'remove_expense',
        id:expenses[1].id
    }
const state=expenseReducer(expenses,action);
expect(state).toEqual([expenses[0],expenses[2],expenses[3]])
})


//should not remove id if id is not same
test('should remove expense by id',()=>{
    const action={
        type: 'remove_expense',
        id:'0023'
    }
const state=expenseReducer(expenses,action);
expect(state).toEqual([expenses[0],expenses[1],expenses[2],expenses[3]])
})

//should add expense
test('should add new expense',()=>{
    const time=moment();
    const expense={
        id:'10',
         description:'school bag',
         note:'',
         amount:1500,
         createAt:time
     }
const action={
    type:'add_expense',
    expense
}
const state=expenseReducer(undefined,action);
expect(state[0].id).toEqual('10');
})
//should edit expense
test('should edit expense',()=>{
    const update=
       'this is update note'
  
    const action={
        type:'edit_expense',
        id:expenses[0].id,
        updates:{note:update}
    }

    const state=expenseReducer(expenses,action);
    expect(state[0].note).toBe(update)
})
//should not edit expense if expense not found
test('hould not edit expense if expense not found',()=>{
    const amount=
       1500
  
    const action={
        type:'edit_expense',
        id:'7',
        updates:{amount}
    }

    const state=expenseReducer(expenses,action);
    expect(state).toEqual(expenses)
})