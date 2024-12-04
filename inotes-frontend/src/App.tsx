import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Notes from "./components/Layout/Notes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter basename="inotes">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainpage" element={<Layout />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
