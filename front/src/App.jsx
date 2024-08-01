import { Route, Routes } from "react-router-dom";
import Mekka from "./ui/pages/mekka/Mekka";
import MekkaSuburb from "./ui/pages/MekkaSuburb";
import Areem from "./ui/pages/Areem";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mekka />}></Route>
        <Route path="/mekka-suburb" element={<MekkaSuburb />}></Route>
        <Route path="/mekka-suburb/areem" element={<Areem />}></Route>
      </Routes>
    </>
  );
}

export default App;
