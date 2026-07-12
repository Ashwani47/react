import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // // step 10:- ab hum chahte hai ek or page ho jo fetching ka kaam kre or github ke api se mera data fetch kre or lakr display kre so uske liye yaha ye fetching wala kaam kiye hai

    // const [data,setdata] = useState({})
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/Ashwani47')
    //     .then((response) => response.json())
    //     .then((data) => setdata(data))
    // }, [])
    
    // // step 11 :- ab ye sbb jo hum fetching ka kaam kar rahe hai yaha ap ho kya raha ahia ki jaise hum main.jsx wala file hai yani humar abrowser pr github wala section open kr rahe hai tb jaakr api call kr rahe hai but more optimised way is ki aisa kuchh kre ki jub mera mouse Github wale section pr hover kre tb hi api call ho jaye so hum ek step pahale hi api call kr lenge isse wo jo thoda sa delay ya lag jisa hogga wo nhi hoga kyunki humara deta pahale hi fetch ho chuka hoga.. ab isko karne ke liye router me humare pass path or element ke alawa ek or feature available hota hai Loader naam se jo wahi api call kr deta hai or uske liye humare pass hooks bhi available hai useLoaderData naam se....or ek aar waha pr fetch krke usko catch me store kr lete hai wo

    const data = useLoaderData()

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers: {data.followers}
            <img
                src={data.avatar_url}
                alt="GitHub Avatar"
                width="300"
                className="mx-auto rounded-full mt-4"
            />
        </div>
    );
}


export default Github