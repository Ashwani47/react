import './App.css'
import AddTodo from './components/AddTodos'
import Todos from './components/Todos'

function App() {

  //step 7 :- apane components ko yaha call kr denge but ek min jais ehumne context api me wrap kiya tha saare components ko taaki sbko access mil sake waise hi hume yaha bhi karna hoga.. ji haan yaha bhi ... or is kaamko hum chaahe to app.jsx me kre ya main.jsx me no problem but kayi jagah dekhenge to waha main.jsx me hi kiya hota hai to hum bhi ism ewahi pr wrap krenge to usse pahale components ko call to krlo yaha pr...

  return (
    <>
      <h1 className='bg-gray-600 text-white p-3 text-center'>Learning redux Toolkit!!!</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
