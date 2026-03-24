import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import UserSearch from "./pages/UserSearch";

function App() {
  return (
    <Routes>
      {/* Not logged in,unprotected */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login/*" element={<Login />} />
      </Route>

      {/* Logged in,protected, guarded by layout "requiresAuth" */}
      <Route element={<Layout requiresAuth />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user-search" element={<UserSearch />} />
      </Route>
    </Routes>
  );
}

export default App;
