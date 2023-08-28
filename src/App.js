import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRouters, publicRouters } from "./routers/";
import { auth } from "./firebase";
import { AuthProvider } from "./context/AuthContext";
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            {publicRouters.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}

            {privateRouters.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
