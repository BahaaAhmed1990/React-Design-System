import { useRef } from "react";
import Heading from "./ui/primitves/Heading";

function App() {
  const headRef = useRef();

  console.log(headRef.current);
  return (
    <>
      <Heading intent={"primary"} size={"md"} ref={headRef}>
        <p>lorem</p>
      </Heading>
    </>
  );
}

export default App;
