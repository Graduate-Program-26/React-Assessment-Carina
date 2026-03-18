import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import Login from "./pages/Login"
export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* TODO: Make use of ROUTES constant */}
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
