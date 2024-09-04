import React, {useState} from "react";
import css from './styles/App.module.css';
import cssMain from './styles/Main.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Error} from "./pages/Error";
import {Main} from "./components/Main";
import {Header} from "./components/header/Header";
import {Footer} from "./components/Footer";
import {Laptop} from "./pages/Laptop";

function App() {
const cs =[cssMain.main,css.conteiner,cssMain.mainContainer];
  return (
      <div className={css.App}>
          <BrowserRouter>
              <Header/>
              <div className={cs.join(" ")}>

              <Routes>
                  <Route path={"/"} element={<Main/>}/>
                  <Route path={"/laptops"} element={<Laptop/>}/>
                  <Route path={"/laptops/:id"} element={<Laptop/>}/>
                  <Route path={"*"} element={<Error/>}/>
              </Routes>

              </div>
              <Footer/>
          </BrowserRouter>

      </div>
  );
}

export default App;
