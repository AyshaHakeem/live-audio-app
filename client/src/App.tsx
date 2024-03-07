import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/sign-in";
import { Room } from "./pages/room";
import { Main } from "./pages/main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
