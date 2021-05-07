
//set_text_filter
export const setTextFilter=(text='')=>({
    type:'set_text_filter',
    text
})
//sort_by_date,amount
export const sortByDate=()=>({
type:'sort_by_date'
})

export const sortByAmount=()=>({
    type:'sort_by_amount'
    })

//set_start_date
export const setStartDate=(startDate)=>({
    type:'set_start_date',
    startDate
    })


//set_end_date
export const setEndDate=(endDate)=>({
    type:'set_end_date',
    endDate
    })