import Text from "./Text";
// import Model from "./Model";
import NewModel from "./NewModel";
import { Container } from "react-bootstrap";
import { Canvas } from "react-three-fiber";

function App() {
  return (
    
      <Container>
        <Text />
        {/* <Model /> */}
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight />
          <NewModel />
        </Canvas>
      </Container>

  );
}

export default App;
