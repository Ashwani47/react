// step 1 :- hume sbse pahale to redux toolkit ko install krna hoga
// step 2 :- hum ab store banayenge :- store is actually that global context
// and to access or use it we will use functions and call it reducers

import { configureStore } from "@reduxjs/toolkit";
// yahi ek method hai jisse store banega

// step 4:- bs ab store ko configure krna hoga aur usme reducer ko pass krna hoga taaki wo usko use kr ske
import todoReducer from "../features/todo/todoSlice"
// under step 4 :- ab hum import kr liye apane ek reducer ko jiska naam hai todoReducer and ab hum usko store me use krnege.. use krne ke liye hum configureStore method ka use krte h aur usme reducer ko pass krte h bs key value pair me reducer ka naam aur uska value jo ki humne import kiya hai wo pass krte h.. and ye hi hume karna tha ab humara store ready h

export const store = configureStore({
    reducer: todoReducer
})
// not ready yet ...but we will come back here later lets set up the slice first...
// slice hota kya hai? actually slice is a piece of state and the logic to update that state
// then what is reducer? reducer is a function that takes the current state and an action as arguments and returns a new state. In Redux Toolkit, we create slices using the createSlice function, which automatically generates action creators and action types for us.