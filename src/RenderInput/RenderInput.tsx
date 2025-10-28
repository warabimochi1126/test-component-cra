import { ChangeEvent, FC, useState } from "react";

type Props = {
  outputConsole: (input: string) => void;
};
const RenderInput: FC<Props> = ({ outputConsole }) => {
  const [input, setInput] = useState<string>("");
  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  );
};

export default RenderInput;
