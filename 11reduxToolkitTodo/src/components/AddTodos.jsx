import React, {useState} from 'react'
// ab agar dispatch se event dispatch krna hai to mujhe useDispatch hook ka use krna padega ... to mujhe react-redux se useDispatch ko import krna hoga
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'



// step 5: setting up the components

function AddTodos() {

    // syntax samajhte hai pahale.. addtodo mtlb store ke andar kuchh add krna hai ... add kaise hoga ? dispatch se to mujhe kuchh na kuchh event dispatch krna padega
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        // dispatch ek reducer ko use krte hue store me changes krta hai
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodos