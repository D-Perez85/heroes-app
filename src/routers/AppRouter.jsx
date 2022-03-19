import React from 'react'
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Login from '../components/login/LoginScreen';
import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
      <Router>
          <div>
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={
                  <PrivateRoute>
                      <DashboardRouter/>
                  </PrivateRoute>
                  } />

                  {/* <Route path="*" element={<DashboardRouter/>} /> */}
              </Routes>
          </div>
      </Router>
  )
}
export default AppRouter; 