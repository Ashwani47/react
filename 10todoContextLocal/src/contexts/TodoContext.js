import {useContext, createContext} from 'react';

// step 1 :- creating contexts in contexts folder


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Learn React",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    toggleTodo: (id) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider