import {createContext} from "react";


const ThemeContext = createContext("dark");

const DataDispatchContext = createContext(null);

export {ThemeContext, DataDispatchContext};