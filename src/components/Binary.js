import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

function Binary({ convert }) {
  const [input, setInput] = useState("");

  const onInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input) {
      if (input.match(/^[0-1]+$/g) !== null) {
        console.log("binary");
        convert(input);
      } else {
        alert("Enter either 0 or 1");
        setInput("");
      }
    }
  }, [input]);

  return (
    <form>
      <TextField
        id="standard-basic"
        required
        color="success"
        label="Enter binary number"
        variant="standard"
        onChange={onInput}
      />
    </form>
  );
}

export default Binary;
