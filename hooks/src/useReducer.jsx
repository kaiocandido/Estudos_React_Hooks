import { useReducer } from "react";

const reducer = (state, action ) => {
    switch(action.type){
        case "increment":
            return{
                counter: state.counter + 1,
            }
        case "decrement":
            return{
                counter: state.counter - 1,
            }
        default:
            return state;
    }
}


function TesteUseReducer(){
    const [state, dispatch] = useReducer(reducer, {counter: 10});

    return(
        <div>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({type:  'increment'})}>increment</button>
            <button onClick={() => dispatch({type:  'decrement'})}>decrement</button>
        </div>
    );
};

export default TesteUseReducer;