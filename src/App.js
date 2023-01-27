import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/Login';
import Translate from './views/Translate';
import Profile from './views/Profile';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={ <Login />} />
            <Route path="/translate" element={ <Translate />} />
            <Route path="/profile" element={ <Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
} 

export default App;