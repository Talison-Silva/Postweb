import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { useState,useEffect,useRef,createContext } from 'react'


// ---| Postagens |--------------------------------------------------------
import Users from '@/pages/users/index.jsx'
import Postagens from '@/pages/postagens/index.jsx'
import PostagensMore from '@/pages/postagens/actions/more/index.jsx'
import PostagensEdit from '@/pages/postagens/actions/edit/index.jsx'
import PostagensCreated from '@/pages/postagens/actions/created/index.jsx'
// ---||-------------------------------------------------------------------

// ---| Authentication |---------------------------------------------------
import Authorization from '@/pages/authentication/authorization/index.jsx';
import CreateUser from '@/pages/authentication/createUser/index.jsx';
import Badge from '@/pages/authentication/badge/index.jsx';
// ---||-------------------------------------------------------------------

// ---| Layouts |----------------------------------------------------------
import Authentication from '@/UI/layouts/authentication.jsx'
import Home from '@/UI/layouts/home.jsx'
// ---||-------------------------------------------------------------------

// ---| utilities |--------------------------------------------------------
//import 'dotenv/config';
import { AlertContext } from "@/app/contexts/alerts.js"
import Alert from "@/UI/components/application-message/index.jsx";
// ---||-------------------------------------------------------------------



function App() {
  const [exists,setExists]=useState(null);
  const coldown=useRef(false);

  let time;
  const alert=async(values)=>
  {
      if(!coldown.current)
      {
          coldown.current=true
          setExists(values)

          time=await setTimeout(()=>
          {
              try
              {
                  setExists({})
              }
              finally
              {
                  coldown.current=false
              }
          }
          ,5000);
      }
  }

  return (
    <Router>
        <Alert {...exists}/>
        <AlertContext.Provider value={alert}>
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route exact path="/entrar?" element={<Authentication><Authorization/></Authentication>} />
            <Route exact path="/registrar" element={<Authentication><CreateUser/></Authentication>} />
            <Route exact path="/me?" element={<Authentication><Badge/></Authentication>}/>

            <Route exact path="/postagens/" element={<Home><Postagens/></Home>} />
            <Route exact path="/postagens/c" element={<Home><PostagensCreated/></Home>} />
            <Route exact path="/postagens/e/:id" element={<Home><PostagensEdit/></Home>} />
            <Route exact path="/postagens/m/:id" element={<Home><PostagensMore/></Home>} />

            <Route exact path="/usuarios/" element={<Home><Users/></Home>} />          
          </Routes>
        </AlertContext.Provider>
    </Router>
  )
}

export default App
