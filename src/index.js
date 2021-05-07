import ReactDOM from 'react-dom';
import App from './routers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import './actions/filters';
import './actions/expenses';
import reportWebVitals from './reportWebVitals';
import './selectors/expenses';
import './styles/styles.scss';


const store=configureStore();


//addExpenses-water,gas bill
store.dispatch(addExpense({
  description:'water bill',
  note:'in 2weeks I gotta pay another bill',
  amount:20000,
  createAt:450,
}));

store.dispatch(addExpense({
  description:'gas bill',
  note:'gas running out every 2months',
  amount:15000,
  createAt:280,
}));

store.dispatch(addExpense({
  description:'rent bill',
  note:'final bill',
  amount:109500,
  createAt:400,
}));
//setTextFilter
store.dispatch(setTextFilter());

//set Timeout
// setTimeout(()=>{
//   store.dispatch(setTextFilter('bill'));
// },3000)


const state=store.getState();
 const visibleEspenses = getVisibleExpenses(state.expenses,state.filters);
 console.log(visibleEspenses);


 const jsx=(
   <Provider store={store}>
       <App />
   </Provider>
 
 )


ReactDOM.render(
  jsx,
  document.getElementById('root')
);


reportWebVitals();
