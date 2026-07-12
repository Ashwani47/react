import React from 'react'
import { useParams } from 'react-router-dom'

// step 9:- ab yaha pr useparams() krke hook hai jo isi kaam ke liye hai jo waha se parameters ko lakr capture krke aapko yaha dega ab use sme waha jo likhe the id jaise ki wahi yaha pr likhana hoga or use append kr diye apane screen pr...

function User() {
    const {id} = useParams()
  return (
    <div>User: {id}</div>
  )
}

export default User