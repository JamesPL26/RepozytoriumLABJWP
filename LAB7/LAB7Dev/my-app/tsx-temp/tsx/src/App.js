import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import LayoutEffectExample from "./LayoutEffectExample";
export default function App() {
    return (_jsxs(_Fragment, { children: [_jsx(ThemeProvider, { children: _jsx(ThemeSwitcher, {}) }), _jsx(LayoutEffectExample, {})] }));
}
