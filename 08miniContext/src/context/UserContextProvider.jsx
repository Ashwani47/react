import React, { useState } from 'react'
import UserContext from './UserContext'

// step 2 yye file jsx kyun? kyunki isme hum react ka component bana rhe hai jo ki ek wrapper hoga aur uske andar jitne bhi child element honge unko global variable ka access milega

const UserContextProvider = ({children}) => {
    // ab ye children kya hai? jaise humne outlets ke baare me padha tha na ki header as it is rakho footer aise it is rakho or outlet ko yaha place krdo waisa same to sam econcept children ka bhi hai ki jo bhi element is wrapper ke andar honge wo children ke through aa jaayenge aur unko global variable ka access milega

    const [user,setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider