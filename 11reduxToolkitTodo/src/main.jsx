import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'


// step 8 :- wrap karenge sbko taaki sbka access mil paaye store ka ab uske liye hume do cheeze chahiye hongi ek to provider jo ki react redux se aayega aur ek store jo ki humne store.js me banaya tha to usko import karenge yaha pr...

createRoot(document.getElementById('root')).render(

  // ab jaise hume pata hai ki ye strictmode sirf performance monitoring ke liye hota hai or uska hume abhi shauq hai nhi to hum isko hata bhi sakte hai or ye hume help krta hai ki humare components me koi problem to nhi hai ya fir koi warning to nhi aa rahi hai to ye hume bata deta hai... or ye sirf development mode me hi kaam karta hai production mode me ye disable ho jata hai...
  // abhi ke liye hata dete hai

// ab context api ke jaise hi ye apane se hi kaam to karega nhi uske liye hume store ko pass karna hoga provider ko taaki ye apane se hi store ko access kar sake ....or hum values pass karenge provider ko taaki ye apane se hi store ko access kar sake... or ye store hume provide karega apane components ko... or ye kaam hume context api me bhi kiya tha to waise hi yaha bhi karenge...
// yaha pr values wale prop ko values nhi store bolte hai
  <Provider store={store}>
    <App />
  </Provider>,
)
