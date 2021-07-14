import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AccountPage from "./components/AccountPage";
import SearchPage from "./components/SearchPage";
import { useSelector } from "react-redux";
import WishPage from "./components/WishPage";
import ComingSoonPage from "./components/ComingSoonPage";

function App() {
  const showModal = useSelector((state) => state.searchModal);
  const showAccount = useSelector((state) => state.showAccount);
  const showComingSoon = useSelector((state) => state.comingSoon);
  const showWishPage = useSelector((state) => state.wish);

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
              {showWishPage && !showAccount && <WishPage />}
              {showAccount && <AccountPage />}
              {!showWishPage && !showAccount ? <Home /> : ""}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
