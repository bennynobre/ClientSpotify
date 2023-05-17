import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
  );
}
