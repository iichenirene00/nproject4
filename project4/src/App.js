import "./App.css";
import Routelist from "./components/Routelist/Routelist";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routelist />
      </BrowserRouter>
    </div>
  );
}

export default App;
