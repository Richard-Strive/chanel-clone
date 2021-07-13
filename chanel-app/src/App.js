import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AccountPage from "./components/AccountPage";
import SearchPage from "./components/SearchPage";
import { useSelector } from "react-redux";

function App() {
  const showModal = useSelector((state) => state.searchModal);
  const showAccount = useSelector((state) => state.showAccount);

  // NEED TO FIX THE MODAL LOGIC
  return (
    <div className="App">
      {showModal ? (
        <SearchPage />
      ) : (
        <>
          <Header />
          {showAccount ? <AccountPage /> : <Home />}
        </>
      )}
    </div>
  );
}

export default App;
