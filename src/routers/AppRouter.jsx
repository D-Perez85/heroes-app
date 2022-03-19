import React from 'react'
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Login from '../components/login/LoginScreen';
import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  return (
      <Router>
          <div>
              <Routes>
                  <Route path="/login" element={
                      <PublicRoute>
                          <Login />
                      </PublicRoute>
                  } />
                  <Route path="*" element={
                    <PrivateRoute>
                        <DashboardRouter/>
                    </PrivateRoute>
                  } />
              </Routes>
          </div>
      </Router>
  )
}
export default AppRouter; 