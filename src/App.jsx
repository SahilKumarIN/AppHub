import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AppList from "./components/AppList";
import WebList from "./components/WebList";
import AppDetail from "./components/AppDetail";
import Footer from "./components/Footer";
import "./index.css";

const App = () => (
  <Router>
    <div>
      <Header />
      <SearchBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AppList />
              <WebList />
            </>
          }
        />
        <Route path="/app/:id" element={<AppDetail />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
