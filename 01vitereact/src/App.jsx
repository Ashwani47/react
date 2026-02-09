
import Chai from "./chai"

function App() {

  return (
    // <Chai/>
    // <h1>hello</h1> // react ka ek issue hai kki wo ek hi element ko return kar skta hai yaha se

    // // so logo ne basic tareek dhundha ki ek div create kro or uske andar multiple tags daal do so at the end of the day hum return to ek hi div kar rahe hai na. 
    // <div>
    //   <Chai/>
    //   <h1>Hello</h1>
    // </div>

    // ab ye itani common problem thi ki react ne kaha ki are bhai chhodo div ka jhanjhat ye lo aap bs empty brackets use krlo jise react me fragment kaha gaya hai...
    <> 
      <Chai/>
      <h1>Hello</h1>    
    </>
  )
}

export default App
