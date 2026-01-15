import { useTheme } from "./ThemeContext"

export default function ThemeSwitcher(): JSX.Element {
  const { dark, toggleTheme } = useTheme()

  return (
    <div
      style={{
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        padding: "1rem",
        height: "100vh",   // pełna wysokość okna przeglądarki
        width: "100vw",    // pełna szerokość okna przeglądarki
      }}
    >
      <button onClick={toggleTheme}>Przełącz motyw</button>
    </div>
  )
}
