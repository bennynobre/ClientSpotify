import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import Home from './pages/Home'
import Login from './pages/Login'
import Unauthorized from './pages/Unauthorized'
import { PrivateRoute } from './PrivateRoutes'
import Remember from './pages/Remember'
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/Remember"
          element={
            <PrivateRoute>
              <Remember />
            </PrivateRoute>
          }
        />
        <Route path="/naoautorizado" element={<Unauthorized />} />
      </Routes>
    </Router>
  )
}
