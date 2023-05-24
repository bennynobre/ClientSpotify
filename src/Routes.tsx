import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import Home from './pages/Home'
import Login from './pages/Login'
export function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  )
}
