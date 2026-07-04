import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (

    <>
      <h1 className='bg-fuchsia-500 text-blacl p-4 rounded-2xl'>Tailwind !</h1>
      {/* hum chahe to multiple time same component ko reuse kr skte hai but issue here is ki usme jo naam wagayera hai wo to same hi hai... uska kya kare? ab har card apane me kuchh alag information store krna chahiye to uska intezaam kiya jata hai props se... */}
      {/* props samajhne ke liye chalo apane card componenet ke andar chalte hai  */}
      <Card username="Tailwind" btnText="Tailwind clicked"/> 
      <Card username="React"/>
      {/* agar hum koi ek parameter pass na kare but use component me handle to kr rakha hai na so kya hoga ? better way hai waah pr koi default value dedo */}
      <Card username="Vite" btnText="Vite clicked"/> 
      {/* providing different properties to different cards using props  */}
    </>




    // since ye pura ka pura ek card hai or traditionally hum krte the ki htmll alag css alag js alal likhate the yaani language ke basis pe categorise krte the but react kahta hai ki nhi traditionally nhi socho .. cheezon ko categorise kro ki wo kya kaam kr rahe hai us basis pr... so agar neecha wala card hai ye pura ek card hai to uska css bhi uske sath hi hona chahiye or js bhi uske sath hi hona chahiye so ye card ka pura code ek hi file me hoga.. so ye react ka concept hai ki cheezon ko unke kaam ke basis pr categorise kro na ki language ke basis pr isi ko components kehte hai...
    // iske liye source ke andar ek folder banao components naam ka jo store krega tmhare reuasable components ko...
    // then import that file here... bs use krlo fir...

    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div className="max-w-sm rounded-2xl bg-white shadow-xl p-6 hover:shadow-2xl transition duration-300">
    //     <h1 className="bg-green-400 text-black p-4 rounded-xl text-2xl font-bold text-center">
    //       Tailwind Test
    //     </h1>

    //     <p className="mt-4 text-gray-600">
    //       Congratulations! Tailwind is working.
    //     </p>

    //     <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
    //       Get Started
    //     </button>
    //   </div>
    // </div>
  );
}

export default App;