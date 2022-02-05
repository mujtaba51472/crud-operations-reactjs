import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Add from './components/Adduser'
import Get from './components/Getuser'
import View from './components/View'
import Edit from './components/Edit'


function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/about' element ={<About/>}>
          </Route>
          <Route path='/contact' element ={<Contact/>}></Route>
          <Route path='/adduser' element ={<Add/>}></Route>
          <Route path='/getuser' element ={<Get/>}></Route>
          <Route path='/viewuser/:id' element ={<View/>}></Route>
          <Route path='/edituser/:id' element ={<Edit/>}></Route>



        </Routes>
      </Router>
    </div>
  )
}

export default App
