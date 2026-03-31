import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { AppLayout } from './components/layout/AppLayout'
import { User } from './types'
import { Directory } from './pages/Directory'
import { Documents } from './pages/Documents'
import { Announcements } from './pages/Announcements'
import { Profile } from './pages/Profile'
import { Vacation } from './pages/Vacation'
import { OrgChart } from './pages/OrgChart'
import { FAQAssistant } from './pages/FAQAssistant'
import { Recruitment } from './pages/Recruitment'

export function App() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const stored = localStorage.getItem('user')
    if (stored) {
      setUser(JSON.parse(stored))
    }
    setLoading(false)
  }, [])

  const handleLogin = (email: string, password: string) => {
    // Mock login - in a real app, this would call an API
    const mockUser: User = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: email,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      jobTitle: 'Product Manager',
      department: 'Product',
      role: 'manager',
      startDate: '2022-01-15',
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-2xl font-bold">Loading...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <AppLayout user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Dashboard user={user} />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/vacation" element={<Vacation />} />
          <Route path="/org-chart" element={<OrgChart />} />
          <Route path="/faq" element={<FAQAssistant />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
