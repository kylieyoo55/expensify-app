import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
    const state=filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: "",
    sortBy: "date",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
    })
})

//sort by amount

test('should setup sortby amount value',()=>{
    const state=filtersReducer(undefined,{type:'sort_by_amount'});
    expect(state.sortBy).toEqual('amount')
});

//sortby date
test('should setup sortby datevalue',()=>{
    const state=filtersReducer(undefined,{type:'sort_by_date'});
    expect(state.sortBy).toEqual('date')
});

//should set text filter
test('should setup text filter with value',()=>{
     const state=filtersReducer(undefined,{
        type:'set_text_filter',
text: 'e'});
    expect(state.text).toEqual('e')
})
//should set start date/end date filter

test('should set up start date',()=>{
    const startDate=moment();
    const state=filtersReducer(undefined,{
        type:'set_start_date',
        startDate
    })
    expect(state.startDate).toEqual(startDate);
})

test('should set up end date',()=>{
    const endDate=moment();
    const state=filtersReducer(undefined,{
        type:'set_end_date',
        endDate
    })
    expect(state.endDate).toEqual(endDate);
})