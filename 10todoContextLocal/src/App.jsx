import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/todoItem'

// step 1 :- creating contexts in contexts folder



function App() {

  //step 3 :- setting up states 
  const [todos,setTodos] = useState([])

  // step 4 :- setting up functions and states to manage todos
  const addTodo = (todo) => {
    setTodos((prev) => [{id : Date.now(), ...todo} , ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachPrevTodo) => eachPrevTodo.id === id ? todo : eachPrevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachPrevTodo) => eachPrevTodo.id !== id))
  }
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((eachPrevTodo) => eachPrevTodo.id === id ? {...eachPrevTodo, completed : !eachPrevTodo.completed} : eachPrevTodo))
  }

  // till step 4 basic context ki functionality khatam ho gayi hai ab local storage ki baat shuru hogi...



  // step 5:- 

  // local storage ek browser ka hota hai ab hum chahe use react se access kare javascript se access kare vue se access kare wo humare uppar hai...
  // localstorage me jyada kuchh hai nhi bs setItem and getItem hai but haan ek issue hai ki localstorage items ko string me hold krta hai and return krta hai to wo hume manage krna hoga
  // ab maan lo mera application load hota hai or hhumne pahale se kuchh todos add kr rakhi thi to aisa konsa method hai jo application ke load hote hi sari values update kre ye lekr aaye? haanji useEffect

  useEffect(() => {
    // jb tk hum react me hai or server side rendering ki baat nhi kr rahe hai tb tk hum local storage ko directly access kr skte hai kyunki jb sb server side pr kaam chala jayega to browser pr aaya hi nhi to local storage kis baat ka..
    // localStorage.getItem("todos") // ab ye to sb string me de deta pr hume string me to nhi chahiye so hum kya kranege ki
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){ // ye todo aa raha hai ya nahi? agar hum to kahi empty to nhi hai tbhi to hum kuchh set karenge
      setTodos(todos)
    }
  }, []) // ye to tb ke liye ho gaya jb application load hoga but hum ye bhi to chahte hai ki jb bhi mere todos add ho to wo local storage me bhi store ho jaaye.... 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) // local storage humesha key value pairs me items ko accept krta hai... to dhyaan rakhna ki set krte waqt jo key hai wahi key use hoga get ke time bhi... 
  }, [todos])
  
  // ab local storage bhi setup ho gaya hai so ab components create krne chalte hai



  return (
    // step 2 :- setting up rough app.jsx ui

    <TodoProvider value={{todos, toggleTodo, addTodo, deleteTodo, updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* step *:- components ko call krlo ab bs */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*ab yaha hume loop laga kr todos ko lana hoga*/}
              {todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
