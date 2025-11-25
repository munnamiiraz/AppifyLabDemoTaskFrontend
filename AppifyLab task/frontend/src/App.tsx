import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadUserFromStorage } from './store/slices/authSlice'
import Navbar from './components/ui/Navbar'
import Login from './components/ui/Login'
import Registration from './components/ui/Registration'
import './App.css'
import "./assets/css/bootstrap.min.css"
import "./assets/css/common.css"
import "./assets/css/main.css"
import "./assets/css/responsive.css"

import LeftSidebar from './components/ui/LeftSidebar'
import LayoutMiddle from './components/ui/LayoutMiddle'
import RightSidebar from './components/ui/RightSidebar'
import DarkModeToggle from './components/ui/DarkModeToggle'


function FeedLayout() {
  return (
    <div className="_layout _layout_main_wrapper">
      <DarkModeToggle />
      <div className="_main_layout">
        <Navbar />
        <div className="container _custom_container">
          <div className="_layout_inner_wrap">
            <div className="row">
              <LeftSidebar />
              <LayoutMiddle />
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUserFromStorage() as any)
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedLayout />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  )
}

export default App