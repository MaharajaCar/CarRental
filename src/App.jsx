import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
      {/* <footer className="footer">
        <p>&copy; 2023 Car Rental. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <ul className="social-media">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </footer> */}
      </div>
  );
}

export default App
