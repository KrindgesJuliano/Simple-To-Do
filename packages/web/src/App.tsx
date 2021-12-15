import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { RequireAuth } from './components/RequireAuth'
import { AuthProvider } from './context/AuthProvider'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'

export const App = function () {
  return (
    <div className="App">
      <Layout>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
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
        </AuthProvider>
      </Layout>
    </div>
  )
}
