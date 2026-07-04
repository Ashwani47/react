import { useState } from "react"


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
    style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={() => setColor("aqua")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"aqua"}}>Aqua</button>
          <button onClick={() => setColor("darkgrey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"darkgray "}}>Darkgray </button>
          <button onClick={() => setColor("mediumseagreen")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"mediumseagreen "}}>Seagreen </button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple "}}>Purple </button>
          <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"violet "}}>Violet </button>
          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive "}}>Olive </button>
        </div>
      </div>
    </div>
  )
}

export default App
