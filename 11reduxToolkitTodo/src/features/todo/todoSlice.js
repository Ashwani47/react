// step 3:- creating slice
import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid is used to generate unique IDs bss 

// store ko sbse pahale hum initial state define krte h kyun ? taaki humare store me initial state ho aur hum uske basis pe kaam kr ske
const initialState = {
    todos: [{id: 1, title: "Hello"}],
}

// slice actualy me reducer ka thoda bada version h jisme hum state aur action dono ko define krte h but reducer me hum sirf state ko define krte h aur action ko alag se define krte h

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // reducers me hum do cheezein define krte h ek to state aur dusra action
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                title: action.payload
            }
            // ab ye to maine state banaya hai update thodi kiya hai so uske liye state ka use krnege
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        // isi tarah se hum or bhi reducers define kr skte h jaise ki updateTodo, completeTodo etc and wo assignment me hoga
    }
})

// actual me hume sirf reducers ke methods export krne hote hai kyunki wahi functionalities provide krte h aur humare components me kaam aate hai
export const { addTodo, removeTodo } = todoSlice.actions // yaha pr humne actions kyun export kiya kyunki hume unko use krke action create krna hota h aur fir usko dispatch krna hota h

// ab jo humne store banaya tha usko bhi awareness chahiye in saare reducers ke baare me taaki wo unko use kr ske to uske liye hume slice ke reducer ko export krna hoga

export default todoSlice.reducer