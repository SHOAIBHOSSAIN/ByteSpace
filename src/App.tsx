import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  if (window.location.pathname === "/register") {
    return <Register />;
  }

  return <Home />;
}

export default App;
