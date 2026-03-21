import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import ProtectedLayout from "./components/Layout/ProtectedLayout"

// TODO: Check if plugins are removing semicolons at end of lines

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* TODO: Make use of ROUTES constant */}
        <Route index element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route element={<ProtectedLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
