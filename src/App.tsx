import "./App.css";
import FrameWorkList from "./FrameworkList/FrameworkList";
import MockServer from "./MockServer/MockServer";
import Render from "./Render/Render";
import RenderInput from "./RenderInput/RenderInput";
import UseEffectRender from "./UseEffectRender/UseEffectRender";

function App() {
  const data = [
    {
      id: 1,
      item: "React",
    },
    {
      id: 2,
      item: "Angular",
    },
    {
      id: 3,
      item: "Vue",
    },
  ];
  return (
    <div>
      <Render />
      <RenderInput outputConsole={console.log} />
      <FrameWorkList frameworks={data} />
      {/* <FrameWorkList /> */}
      <UseEffectRender />
      <MockServer />
    </div>
  );
}

export default App;
