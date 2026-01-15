import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import LayoutEffectExample from "./LayoutEffectExample";

export default function App(): JSX.Element {
  return (
    <>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
      <LayoutEffectExample />
    </>
  );
}
