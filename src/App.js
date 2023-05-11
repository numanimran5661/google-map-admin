import {
  Routes,
  Route
} from "react-router-dom";
import Auth from "./pages/Auth";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
