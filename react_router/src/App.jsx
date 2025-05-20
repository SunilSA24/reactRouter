import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
import Notfound from './Components/Notfound'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/users' element={<User />}></Route>
      <Route path='*' element={<Notfound />}></Route>
    </Routes>

    <nav>
      <ul>
        <li>
           <Link to="/">Home</Link>
        </li>
        <li>
           <Link to="/about">About</Link>
        </li>
        <li>
           <Link to="/users">User</Link>
        </li>

      </ul>
    </nav>
    </>
  )
}

export default App
