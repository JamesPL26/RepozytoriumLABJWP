import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "./ThemeContext";
export default function ThemeSwitcher() {
    const { dark, toggleTheme } = useTheme();
    return (_jsx("div", { style: {
            background: dark ? "#333" : "#fff",
            color: dark ? "#fff" : "#000",
            padding: "1rem",
            height: "100vh", // pełna wysokość okna przeglądarki
            width: "100vw", // pełna szerokość okna przeglądarki
        }, children: _jsx("button", { onClick: toggleTheme, children: "Prze\u0142\u0105cz motyw" }) }));
}
