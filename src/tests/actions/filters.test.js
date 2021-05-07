import {setStartDate, setEndDate,sortByAmount,sortByDate,setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'set_start_date',
        startDate:moment(0)
    })
})


test('should generate set end date action object',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'set_end_date',
        endDate:moment(0)
    })
})

test('should generate set text filter with text value',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'set_text_filter',
        text:'',
    })
})

test('should generate sort by date action object',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'sort_by_date'
    })
})

test('should generate sort by amount action object',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'sort_by_amount'
    })
})