import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

//import header
import Header from "./components/header/index.js";

//import of components das rotas
import Feed from "./pages/feed/index.js";
import Edit from "./pages/edit/index.js";
import Lermais from "./pages/lermais/index.js";
import Post from "./pages/post/index.js";

//import styling
import './styles/global.scss';

const App = () => {
   return(
       <Router>
            <Routes>
               <Route element= {<section><Header typeH={true}/><Feed/></section>}  path="/" exact />
               <Route element= {<section><Header/><Edit/></section>}  path="/edit/:id" exact />
               <Route element= {<section><Header/><Lermais/></section>}  path="/lermais/:id" exact />
               <Route element= {<section><Header/><Post/></section>}  path="/post" exact />
            </Routes>
       </Router>
   )
}

export default App;