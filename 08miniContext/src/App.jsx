import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    // step 3: Wrap the entire app with the UserContextProvider component to provide the context to all child components
    // Now, any component within this provider can access the user context using the useContext hook
    // This is a simple example of how to use React Context to manage state across components without prop drilling
    // In a real application, you would typically have more complex state and functions to manage user authentication, and you would pass those down through the context provider
    <UserContextProvider>
      <h1>React with Chai</h1>
      {/* step 6 :- yaha pr humne sb setup kr liya hai ab bs apane component ko call krna hai yaha pr... or data kaise handle hoga uski chinta nhi krni kyunki wo sb kaam humnne global variable bana jr component ke andar hi handle kr liya hai */}
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
