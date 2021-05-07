

const expensesReducerDefault=[]

const expensesReducer=(state=expensesReducerDefault,action)=>{
    switch(action.type){
        case'add_expense':
            return [
             ...state,
            action.expense];

        case 'remove_expense':
            return state.filter(({id})=> id !== action.id);
        
        case 'edit_expense':
            return state.map((exp)=>{
               if( exp.id === action.id){
                   return{
                       ...exp,
                       ...action.updates
                   }
               }else{return exp}
            })

        default: 
            return state;    }
};

export default expensesReducer;