import Home from "./pages/Home";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
 
  margin: 0;
  padding:0;
`

function App() {
  return (
    <Container>
        <Home />
    </Container>
  );
}

export default App;
