import moment from 'moment';

const filtersReducerDefaultState={
    text: "",
    sortBy: "date",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filtersReducer=(state=filtersReducerDefaultState,action)=>{
switch (action.type){
    case 'set_text_filter':
        return {
            ...state,
            text:action.text
        };
    case 'sort_by_amount':
        return{
            ...state,
            sortBy:'amount'
        }
    case 'sort_by_date':
        return{
            ...state,
            sortBy:'date'
        }
    case 'set_start_date':
        return{
            ...state,
            startDate:action.startDate
        }
     case 'set_end_date':
        return{
                ...state,
                endDate:action.endDate
            }
            default:
                return state;
}
}

export default filtersReducer;