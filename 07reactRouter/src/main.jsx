import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './root.jsx'
import Home from './commponents/Home/Home.jsx'
import Contact from './commponents/Contact/Contact.jsx'
import About from './commponents/About/About.jsx'
import User from './commponents/User/User.jsx'
import Github from './commponents/Github/Github.jsx'

// step 4 :- ab route to waha bata diye but route ko define bhi to krna hoga na

// const router = createBrowserRouter(
//   createRoutesFromElements(
  // // step 5:- parent hai yaani root jiske andar sb load hone wala hai
//     <Route path='/' element={<Root/>}>
// // step 6 :- uske andar sbse pahale header or footer ke beech me home ko load kro... ab home ko load krne ke liye ya kisi or component ko load krne ke liye pahale use banana bhi to hoga...or ek or baat hum in sb routes ke andar bhi nestinng kr skte hai...
//       <Route path='' element={<Home/> }/>
//       <Route path='about' element={<About/> }/>
//       <Route path='contact' element={<Contact/> }/>
//     </Route>
//   )
// )

// another way is 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        // step 8 :- ab hum chahte hai ki user url me jo enter kre user/xyz to hum uss xyz ko capture krna chah rahe hai wo bhi ek alag component ke through to pahale to ek alag user component bana lo ...phir yaha path me user/:id dedo ab ye : ke baad ko jao hai wo bahot important hai yahi wo xyz ke form me capture hoga so wapas se user wale component pr chalte hai
        path: "User/:id",
        element: <User/>
      },
      {
        path: "Github",
        // step 12 :-
        loader: async () => {
            const response = await fetch("https://api.github.com/users/Ashwani47");
            return response.json();
        },
        element: <Github />
    }
    ]
  }
])

// step 1 :- create a root,jsx jaha pr sb load hoga

// step 2 :- yaha pr <App/> ki jagah router ko render karwao...ab ye router kya karega route provide krega jo ki batyega ki kb kaise kise load krna hai

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
