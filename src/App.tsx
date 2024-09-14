import Footer from "./modules/Footer";
import Navbar from "./modules/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
