import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  // step 3:- back to app.jsx ab yaha pr hum hooks wagayera setup karenge or jo values theme provider se mil rahi hai use use krenge taaki humlog theme switcher kaam kar sakein ...to ab apana hooks wagayera setup karte hai
  const [themeMode, setThemeMode] = useState('light')
  // ab jo baaki ke light theme or darktheme methods hai unki implementation karte hai taaki humlog theme switcher kaam kar sakein ...to chalo ab hum apna light theme or dark theme methods wagayera setup karte hai
  // kind of method overriding hi hai ye bhi 
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // step 4:- actual me theme kaise change hoga ? useEffect wagayera ka use to krna hi hoga na
  useEffect(() => {
    const theme = document.querySelector('html').classList
    theme.remove('light', 'dark')
    theme.add(themeMode)
  }, [themeMode])

  // ab ye sb kaam ho gaya hai to chalte hai step 5 pr jisme apane components create krenge hum
  



// step 1 :- setting up for the theme switcher ... abki baar humlog same context wagayera create krenge but different approach se taaki hume dono approaches clear ho...to chalo step 2 ke liye apana context create krte hai 
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
