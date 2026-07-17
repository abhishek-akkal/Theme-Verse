import React, { useState } from "react";
import Navbar from "./Componenets/Navbar";
import LeftSide from "./Componenets/Content/LeftSide";
import BottomSide from "./Componenets/Content/BottomSide";
import ThemePage from "./Componenets/ThemePage";
import { Route, Routes } from "react-router-dom";
import Footer from "./Componenets/Content/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themes = {
    light: "bg-white text-black",
    dark: "bg-black text-white",
    blue: "bg-blue-950 text-white",
    purple: "bg-purple-950 text-white",
  };

  return (
    <div className={`min-h-screen ${themes[theme]}`}>
      <Navbar theme={theme} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <LeftSide theme={theme} />
              <BottomSide theme={theme} />
            </>
          }
        />

        <Route
          path="/ThemePage"
          element={<ThemePage theme={theme} setTheme={setTheme} />}
        />
      </Routes>
      <Footer theme={theme} />
    </div>
  );
};

export default App;
