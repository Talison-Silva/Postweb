import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { useState,useRef,createContext } from 'react'


import Alert from "@/ui/components/alert/index.jsx";
import { AlertContext } from "@/app/contexts/alerts.js"


// ---| VIEWS |===========================================================|
import Welcome from '@/pages/welcome/index.jsx'
import Users from '@/pages/users/index.jsx'

import Postagens from '@/pages/postagens/index.jsx'
import PostagensMore from '@/pages/postagens/actions/more/index.jsx'
import PostagensEdit from '@/pages/postagens/actions/edit/index.jsx'
import PostagensCreated from '@/pages/postagens/actions/created/index.jsx'
import IN from '@/pages/log/in/index.jsx';
import UP from '@/pages/log/up/index.jsx';
import ME from '@/pages/log/me/index.jsx';
// ---|===================================================================|

import Layouts from '@/ui/layouts/index.jsx'
import LoggIn from '@/ui/layouts/loggin.jsx'

function App() {
  const [exists,setExists]=useState(null);    
  const coldown=useRef(false)


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
            <Route exact path="/" element={<Layouts><Welcome/></Layouts>} />
            <Route exact path="/entrar?" element={<LoggIn><IN/></LoggIn>} />
            <Route exact path="/registrar" element={<LoggIn><UP/></LoggIn>} />
            <Route exact path="/me?" element={<LoggIn><ME/></LoggIn>}/>

            <Route exact path="/postagens/" element={<Layouts><Postagens/></Layouts>} />
            <Route exact path="/postagens/c" element={<Layouts><PostagensCreated/></Layouts>} />
            <Route exact path="/postagens/e/:id" element={<Layouts><PostagensEdit/></Layouts>} />
            <Route exact path="/postagens/m/:id" element={<Layouts><PostagensMore/></Layouts>} />

            <Route exact path="/usuarios/" element={<Layouts><Users/></Layouts>} />          
          </Routes>
        </AlertContext.Provider>
    </Router>
  )
}

export default App
