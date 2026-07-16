import React, { createContext } from 'react'

//                          step :-1 ye file js kyun? kyunki hum ek context create kar rhe hai jo ki ek global variable ka kaam karega aur ye context ek function hi to hai jo ki react ke createContext function se create hota hai

const UserContext = createContext()
// ab ye context hai kya ek function hi to hai ... ab jitane bhi context hote hai wo ek provider bhi hote hai... mtlb? ab is conntext ka kaam kya hai ki wo global variable ka access sbko de paaye yahi na.. so jb bhi hum koi fragment ya wrapper banayenge to uske top level pr iss userContext ko use krenge taaki uske bottom level ke jitane bhi element hai unko global varaible ka access mil jaye

export default UserContext