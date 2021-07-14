import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AccountPage from "./components/AccountPage";
import SearchPage from "./components/SearchPage";
import { useSelector } from "react-redux";
import ComingSoonPage from "./components/ComingSoonPage";

function App() {
  const showModal = useSelector((state) => state.searchModal);
  const showAccount = useSelector((state) => state.showAccount);
  const showComingSoon = useSelector((state) => state.comingSoon);

  return (
    <div className="App">
      {showComingSoon ? (
        <ComingSoonPage />
      ) : (
        <>
          {showModal ? (
            <SearchPage />
          ) : (
            <>
              <Header />
              {showAccount ? <AccountPage /> : <Home />}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
