import React from "react";
import "./App.css";
import AccountSearch from "./Components/AccountSearch";
import Footer from "./Components/Footer";
import NavBar from "./Components/Nav";

function App() {
  return (
    <React.Fragment>
      <AccountSearch />
      <NavBar/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
