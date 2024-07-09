import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
          <Router>
              <Routes>
                <Route path='/' element={<Users />}></Route>
                <Route path='/create' element={<CreateUser />}></Route>
                <Route path='/update' element={<UpdateUser />}></Route>
              </Routes>
          </Router>
  )
}

export default App