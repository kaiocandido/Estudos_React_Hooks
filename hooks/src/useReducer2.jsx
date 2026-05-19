import { useReducer, useState } from "react";

const reducer = (state, action ) => {
    switch(action.type){
        case "addTask":
            return {
                tasks: [...state.tasks, {name: action.payload, isCompleted: false},

                ]
            }
        case "toggleTask":
            return{
                ...state,
                task: state.tasks.map((item, index) => index == action.payload ? {...item, isCompleted: !item.isCompleted} : item)
            }
    }
}


function TesteUseReducerTwo(){

    const [inputValue, setInputValue] = useState('');

    const [state, dispatch] = useReducer(reducer, {tasks: []});

    return(
        <div>
            <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button onClick={() => { 
                dispatch({type:  'addTask', payload: inputValue});
                setInputValue("");
            }}>Adicionar</button>

            {state.tasks.map((task, index) => (
                    <p
                    key={index}
                    onClick={() => dispatch({ type: "toggleTask", payload: index })}
                    style={{ textDecoration: task.isCompleted ? 'line-through' : "none" }}
                    >
                    {task.name}
                    </p>
                ))}

            
        </div>
    );
};

export default TesteUseReducerTwo;