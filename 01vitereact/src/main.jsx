import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//                        --------------              L_4           -------------------

// kya hum Wo function jo hum App.jsx ya kisi exernal file me likh rahe the phir import kara rahe the use yaha likhe to chalega?
function MyApp(){ // behind the scene bundler isko tree like structure me convert karta hai jaisa customReact me dekha tha..
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// since humne dekha ki ye aisa koi bhi function end of the day parse hoke bundler ke through ek tree structure me banta hai phir execute hota hai to kya hum agar directly wo tree structure me hi likhu to chalega?
const ReactElem = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit Google.'
}

const NewElem = (
  <a href='https://google.com' target='_blank'>Click to visit Google!!!</a>
)

const heyAsh = "Ashwani"

// kya hum samajh skte hai ki react me kaise bn raha hai ye sb behind the scene ? haan react hume ek method deta hai create element ka but uske andar ek order or proper syntaxing ke saath cheezien batani padti hai taaki naya element hum create kr paaaye...
const NewReactElem = React.createElement( //// jub hum <App/> likhte ha to actually me React.createElement(App) call hota hai jo ki mere App function ko ek node object jise virtual DOM bolte hai usme convert krta hai...
  'a', // expects a tag
  {href: "https://google.com", target: "_blank"}, // expects an object for attribute
  "Click new react element to visit google", // expects direct texts
  // jb sara kuchh ho jata hai tb aata hai variable injection.
  heyAsh
)



createRoot(document.getElementById('root')).render(
    // <MyApp/> 
    // this myApp method can also be written as MyApp() since after all it is a function but in production and for better practice we dont write this

    // <ReactElem/>
    // are yrr kucchhh bhi render kyun nhi hua? pahali baat to reactelem ek object hai koi function nhi jo angular bracket me ya paranthesis ke saath aayega.. 
    // ReactElem
    // ab ye is liye nhi chal raha kyunki customreact.js me to humne apna ek khud ka customrender function banaya tha jo ise render karwa raha tha but ya to react ke diye hue render function pr chala rahe hai so uske apane alag method of execution alag parameters honge

    // NewElem // waah ji waah ye to chal gaya ... so react ka jo render function hai to wo NewElem wala syntax accept krta hai...

    // NewReactElem

    <App/>

  
)
