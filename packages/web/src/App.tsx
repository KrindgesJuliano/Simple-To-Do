import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { Layout } from './components/Layout/Layout'
import { RequireAuth } from './components/RequireAuth'
import { AuthProvider } from './context/AuthProvider'
import { Dashboard } from './pages/TasksPage'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { SingUp } from './pages/SignUp'

export const App = function () {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SingUp />} />
            <Route
              path="/todo"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </Layout>
      </AuthProvider>
    </div>
  )
}
