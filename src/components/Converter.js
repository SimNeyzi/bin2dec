import Binary from "./Binary";
import { useState } from "react";

function Converter() {
  const [output, setOutput] = useState("");

  const convert = (input) => {
    console.log(input[input.length - 1]);
    if (input.length > 0) {
      const output = parseInt(input, 2);
      setOutput(output);
    }
  };

  return (
    <div>
      <Binary convert={convert} />
      <h2>{output}</h2>
    </div>
  );
}

export default Converter;
