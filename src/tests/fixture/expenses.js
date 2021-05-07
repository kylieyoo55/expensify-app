import moment from 'moment';

const expenses=[{
    id:'1',
    description:'Gum',
    note:'',
    amount:190,
    createAt:0
},
{
    id:'2',
    description:'Rent',
    note:'',
    amount:5400,
    createAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'3',
    description:'Credit Card',
    note:'',
    amount:65000,
    createAt:moment(0).add(4,'days').valueOf()
},
{
    id:'4',
    description:'Drink',
    note:'',
    amount:1800,
    createAt:moment(0).add(5,'days').valueOf()
}]

export default expenses;