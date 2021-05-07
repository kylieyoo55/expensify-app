import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=>{
    const action= removeExpense({id: '123abc'});
    expect(action).toEqual({
        type:'remove_expense',
        id:'123abc',

    })
})

test('should setup edit expense action object',()=>{
    const action = editExpense('321qwe',{note:'new note value'});
    expect(action).toEqual({
        type:'edit_expense',
        id:'321qwe',
        updates:{note:'new note value'}
    })
})

test('should setup add expense action object with provide values',()=>{
    const expenseData={
        description:'Electric Bill',
        amount:8533,
        createAt:16500000,
        note:'this was bill for a week'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'add_expense',
        expense:{
            id:expect.any(String),
            ...expenseData
        }

    })
})

test('should setup add expense action object with default values',()=>{
   const action=addExpense();
    expect(action).toEqual({
        type:'add_expense',
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createAt:0
        }
    })
})