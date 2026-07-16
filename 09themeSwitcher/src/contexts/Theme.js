import { useContext, createContext } from "react";

// step 2:- 

// export const ThemeContext = createContext()
// ab aisa hi kuchh kaam to peechhale project me kiye the but yaha pr hum create context me default values set kr skte hai or hum karenge bhi taaki project crash na ho mtlb jb initial context create hoga tb uske andar default values set ho jaayein taaki jb humlog context ko use krenge to hume error na mile...

export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {}
})

// ab iske baad hume provider chahiye hua karta tha jise hum separate jsx file me banate the but hum use yahi create kr denge taaki humlog context ko use krte hue provider ka use kr sakein...

export const ThemeProvider = ThemeContext.Provider

// ab yahi pr hume context ko use krne ke liye custom hook create krna hoga jise humlog alag se file me create karte the but abhi humlog yahi pr create krenge taaki humlog context ko use krte hue custom hook ka use kr sakein...or hume multiple imports na krne ho har jagah or sb ka sb kaam yahi ho jaaye 
export default function useTheme() {
    return useContext(ThemeContext)
}