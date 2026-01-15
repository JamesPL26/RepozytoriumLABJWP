import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false);
    const toggleTheme = () => setDark((prev) => !prev);
    return (_jsx(ThemeContext.Provider, { value: { dark, toggleTheme }, children: children }));
}
export const useTheme = () => useContext(ThemeContext);
