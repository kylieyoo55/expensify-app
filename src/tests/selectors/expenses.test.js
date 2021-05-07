import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixture/expenses';

test('should filter by text value',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result =selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]])
});

test('should filter by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[3],expenses[2],expenses[0]])
})

//should filter by end date
test('should filter by end date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:moment(0).add(20,'days')
    }

    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[3],expenses[2],expenses[0]])
})
//should sort by date
test('should sort by date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[3],expenses[2],expenses[0],expenses[1]])
})
//should sort by amount
test('should sort by amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }

    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1],expenses[3],expenses[0]])
})