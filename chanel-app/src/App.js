import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  // window.addEventListener("scroll", () => console.log("scrolling down"));
  // it's working

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
