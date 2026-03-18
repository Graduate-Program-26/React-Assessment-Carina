import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* TODO: Make use of ROUTES constant */}
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
