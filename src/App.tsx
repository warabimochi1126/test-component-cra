import "./App.css";
import Render from "./Render/Render";
import RenderInput from "./RenderInput/RenderInput";

function App() {
  return (
    <div>
      <Render />
      <RenderInput outputConsole={console.log} />
    </div>
  );
}

export default App;
