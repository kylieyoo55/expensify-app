import { render } from 'node-sass';
import {createStore} from 'redux';


const tryRedux=()=>{
    const store =createStore((
        state={
            count:0
        }
    )=>{
        return state;
    });

    console.log(store.getState())
   render(
  
   )


}



export default tryRedux;