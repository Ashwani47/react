import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  // collecting the variables that causes the change
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook to connect copy button with input field and use other properties
  const passwordRef = useRef(null) 

  // password generator method that actually generates random passwords and useCallback is used for optimization purpose to store changes in cache memory
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // copyPassword method that is responsible for copying the password to clip board
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select() // to show or to highlight the slected range for better user experience
    passwordRef.current?.setSelectionRange(0,length) // how much length you want to copy
    window.navigator.clipboard.writeText(password) // that copies or write that password into clipboard
  },[password])

  // useEffect hook that actually triggers passwordGenerator method 
  useEffect(()=>{passwordGenerator()}, [length, numberAllowed,charAllowed,passwordGenerator])

  // ui part
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-2xl overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2  focus:outline-none"
            placeholder="Your Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charachterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charachterInput">Charachters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
