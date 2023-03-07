import React, {useState} from "react";
import "./App.css";
import Counter from "./Counter";

export const ThemeContext = React.createContext();

// context has 2 parts a provider and a consumer.
// Provider- pass out a value providing a value to everything inside of it
// Consumer- consuming that value

function App() {
  console.log("Render App");
  const [theme, setTheme] = useState('blue')
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      <Counter initialCount={0} />
      <button onClick={ () => setTheme(prevTheme => {
        return prevTheme === 'blue' ? 'green' : 'blue'})}> Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;


// Changing Context doesn't rerender page