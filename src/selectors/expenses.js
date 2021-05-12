import moment from 'moment';

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((exp)=>{
        const createAtMoment=moment(exp.createAt);
        const startDateMatch = startDate? startDate.isSameOrBefore(createAtMoment,'day') :true;
        const endDateMatch= endDate?endDate.isSameOrAfter(createAtMoment,'day'):true;
        const textMatch=exp.description.toLowerCase().includes(text.toLowerCase());
        // typeof startDate !== 'number' || exp.createAt >= startDate;
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
if(sortBy === 'date'){
    return a.createAt < b.createAt?1:-1;
}
if(sortBy ==='amount'){
    return a.amount < b.amount? 1:-1;
}
return 0;
    });
}

export default getVisibleExpenses;