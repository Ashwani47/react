import { useState } from 'react' // yahi useState bhi ek hook hi hai isi ki tarah or bhi hooks hote hai jaise useEffect , useCallBack , etc.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // ------------------------------------------------------                  L-5 How to propogate changes in ui using react hooks -------------------------------------

  // how to use hooks ? lets use useState hook
  // useState hook is used to change the state of ui
  let  [counter, setCounter] = useState(0) // useState ke andar kuchh bhi input parameter de skte hai jaise empty string array object bool etc kucch bhi yaha hum 15 diye hai kyunki humara counnter jo use kr rahe the uski value 0(default value jo hume pass krni hai jo default taur pr screen pr show hoga) set kiya tha humne. or then useSatet hume ek array return krta hai jisme do values hoti hai hai ek to counter or ek setCounter isliye inko array me hold karwa liya humne .. halaki in dono variable ka hum kuchh bhi naam rakh skte hai but as per the naming convention hum yahi naam rakhte hai...
  // or haan ye bhi same kaam hi kar raha hai ki ek variable counter naam se bnaa raha hai or keh raha ki ek koi setCounter function hoga jo mujhe update krega uske bbbaad jaha bhi counter variable use hua hoga use ye update krdega react. ab counter ki jagah apane use case ke hisaab se hu login , isLogin jaise etc variables ko bhi use kr skte hai...



  // let counter  = 0
  const addValue = () => {
    // counter = counter+1
    // since react controls the ui updation thats why our updated counter is not visible to us ... thats when React hooks comes into the picture.
    setCounter((prevCounter) => prevCounter+1)
  }

  const removeValue = () => {
    setCounter((prevCounter) => {
      if(prevCounter>0) return prevCounter-1 // to ensure humara counter ka value negative me na jaaye...
      return prevCounter
    })
  }

  const refresh = () =>{
    setCounter(0)
  }

  return (
    <>
      <h1>Hello!!!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button> 
      <br/>
      <button onClick={removeValue}>Remove value</button>
      <br />
      <button onClick={refresh}>Refresh</button>
    </>
  )
}

export default App
