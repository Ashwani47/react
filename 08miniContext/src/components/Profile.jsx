import React from 'react'
import { useContext } from "react"
import UserContext from '../context/UserContext'

// step 5:- yaha bhi simillar sa kaam hai bs waha pr data set kr rahe the yaha use krenge
// ye data humne context api ke through bheja tha to ab humne context api ka use krke data ko le liya hai or ab hum is data ko apane profile page me show kr skte hai

function Profile() {

    const {user} = useContext(UserContext)

    // ye conditional return hai ... koi nya topic nhi hai just use case pr dependent hai

    if(!user) return <h2>Please login to view profile</h2>

    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </div>
    )

}

export default Profile