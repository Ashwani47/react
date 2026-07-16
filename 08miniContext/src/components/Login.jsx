import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


// step 4:- yaha hum abhi apane normal components design kr rahe hai and later we will use context api to manage the state of the user and pass it to the components


function Login() {
    // ab username or password field li hai to usko manage krne ke liye useState ka use to krna hi padega na
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // yaha humne user ko set kr diya hai context api ke through
        setUser({username, password})
        // ab humne user ko set kr diya(bhej diya hai) hai to ab hum chahte hai ki user ko profile page pe le jaye to uske liye hum react routter ka use krke pages change kr skte hai but abhi humne react routter ka use nhi kiya hai or wo hum baad me apane se krenge 
        // ab jb humne data bhejna sikh liya to data ko lena bhi sikh hi lete hai uske liye simillar si cheezien krni hai to uske liye profile.jsx me jaake useContext ka use krke data ko le lenge
    }
  return (
    // ye sb to normal html ki cheezien hain kuchh bhi extra nhi hai ye sb to hum jaante hai...
    <div>
        <h2>LogIn</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
        <br/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login