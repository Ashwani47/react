import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import bgImage from "./assets/currency.jpg";

//                                            STEP:- 3

function App() {
  // ab states ko setup krte hai or manage krte hai using usestate kyunki humne jo inputBox component banaya hai usme dhero parameters pass krni hai to unhe manage bhi to krna hoga na

  // jo amount waha enter hoga uske states ko manage krne ke liye
  const [amount,setAmount] = useState(0)
  //jo from to waha display hoga uske ui state ko manage krne ke liye
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  //result ka state bhi to ui me update krna hoga to uske liye
  const [result, setResult] = useState(0)

  // now usinng our hook
  const currencyInfo = useCurrencyInfo(from) // ab yaha input me kya de skte the humara hook to currency expect kr raha tha to dedo na ek state bana to rakhe ho from wala wahi pass krdo kyunki usi ko to connvert kroge

  // ab dhyan se dekho apane useCurrencyInfo wale hook ko to wo ek data return kr raha hai jo actually me hai kya? ek obbject hi to hai ab uss object ke keys ko hhi to user ko return karoge kyunki values ka use krke to conversion krna hai wo to hum karenege na so hume kisi tarah se saari keys ko leni hai
  const options = Object.keys(currencyInfo)

  // ab humare project ek basic functionality hai jo ki swap kr raha hai from or to ko to uske liye ek method bana lete hai jise ki button se link kr denge baad me
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(result)
    setResult(amount)
  }

  // jb user convert pr click krega to kya hoga?
  const convert = () => {
    setResult(amount * currencyInfo[to])
  }


  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button 
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label="To"
                amount={result}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit"
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
