import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import Home from './pages/Home'
import Login from './pages/Login'
import Unauthorized from './pages/Unauthorized'
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/naoautorizado" element={<Unauthorized />} />
      </Routes>
    </Router>
  )
}
