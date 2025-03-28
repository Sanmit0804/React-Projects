import React, { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider"

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
    } else if (email == 'user@me.com' && password == '123') {
      setUser('employee');
    } else {
      alert("Invalid credentials");
    }
  }

  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
