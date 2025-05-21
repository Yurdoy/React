import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {


  return (
    <>
      <Header/>
      <main>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
