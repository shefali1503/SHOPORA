import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'   // ✅ use Admin

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* All admin routes go inside Admin */}
        <Route path="/*" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App