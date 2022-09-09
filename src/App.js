import Header from "./components/Header";
import Converter from "./components/Converter";
import Container from "@mui/material/Container";
import "@fontsource/roboto/500.css";

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <Header />
      <Converter />
    </Container>
  );
}

export default App;
