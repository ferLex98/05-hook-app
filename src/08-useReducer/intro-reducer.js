console.log('First');

const initialState =[{
    id:1,
    todo: 'Recolectar ala pieda del alma',
    done: false
}];

const todoReducer = (state = initialState, action = {} )=>{
    //Regresar un nuevo estado
    if(action.type ==='ADD_TODO'){
        return [...state, action.payload]; //añado lo que viene en el payload

        //Nunca usar: state.push() porque muta el objeto
    }
    return state;  
}

let todos = todoReducer();


//Cuando se quiere modificar el recude sedebe enviar uan accion
const newTodo = {
    id:2,
    todo: "Ver la tv",
    done: false,
}
 
const addTodoAction={
    type: 'ADD_TODO',
    payload: newTodo,  ///Carga que esta dentro de la accion, va en todo menos cuando se haga delete
}

todos = todoReducer(todos, addTodoAction);
console.log({state: todos});