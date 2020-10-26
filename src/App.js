import React from "react";
import Navbar from "../src/component/Navbar/Navbar";
import ThemeContextProvider from "./context/themeContext";
import Booklists from "../src/component/Booklist/Booklist";
import "./style.css";
import ToggleTheme from "./component/toggleTheme/toggleTheme";

import AuthContextProvider from "./context/AuthContext";
import BookDataContextProvider from "./context/BookDataContext";
function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookDataContextProvider>
            <Booklists />
          </BookDataContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
