import "./App.css";
import { useWindowResize } from "./hooks/useWindowResize";

function App() {
  const { height, width } = useWindowResize();

  return (
    <>
      <h1>Window resizer</h1>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </>
  );
}

export default App;
