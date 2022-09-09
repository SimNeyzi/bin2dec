import TextField from "@mui/material/TextField";
import { useState } from "react";

function Binary({ convert }) {
  return (
    <form>
      <TextField
        id="standard-basic"
        required
        color="success"
        label="Enter binary number"
        variant="standard"
        onChange={(e) => convert(e.target.value)}
      />
    </form>
  );
}

export default Binary;
