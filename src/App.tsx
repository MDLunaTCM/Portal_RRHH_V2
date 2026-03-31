import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { User } from '@/types'
import { Login } from '@/pages/Login'
import { Dashboard } from '@/pages/Dashboard'
import { Profile } from '@/pages/Profile'
import { Directory } from '@/pages/Directory'
import { OrgChart } from '@/pages/OrgChart'
import { Vacation } from '@/pages/Vacation'
import { Documents } from '@/pages/Documents'
import { Announcements } from '@/pages/Announcements'
import { Recruitment } from '@/pages/Recruitment'
import { FAQAssistant } from '@/pages/FAQAssistant'
import { Headcount } from '@/pages/Headcount'
import { EmployeeMovements } from '@/pages/EmployeeMovements'
import { Onboarding } from '@/pages/Onboarding'
import { Settings } from '@/pages/Settings'
import { KnowledgeBase } from '@/pages/KnowledgeBase'
import { AppLayout } from '@/components/layout/AppLayout'

// Mock user data - replace with real auth later
const mockUsers: Record<string, User> = {
  employee: {
    id: '1',
    email: 'john.doe@company.com',
    firstName: 'John',
    lastName: 'Doe',
    avatar: undefined,
    role: 'employee',
    jobTitle: 'Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    manager: 'Robert Kim',
    phone: '+1 (555) 123-4567',
    startDate: '2022-06-15',
    employmentType: 'full_time',
  },
  manager: {
    id: '2',
    email: 'sarah.manager@company.com',
    firstName: 'Sarah',
    lastName: 'Manager',
    avatar: undefined,
    role: 'manager',
    jobTitle: 'Engineering Manager',
    department: 'Engineering',
    location: 'San Francisco, CA',
    manager: 'Robert Kim',
    phone: '+1 (555) 234-5678',
    startDate: '2020-03-10',
    employmentType: 'full_time',
  },
  hr_admin: {
    id: '3',
    email: 'jessica.hr@company.com',
    firstName: 'Jessica',
    lastName: 'Lee',
    avatar: undefined,
    role: 'hr_admin',
    jobTitle: 'HR Manager',
    department: 'Human Resources',
    location: 'Los Angeles, CA',
    phone: '+1 (555) 345-6789',
    startDate: '2021-01-20',
    employmentType: 'full_time',
  },
  recruiter: {
    id: '4',
    email: 'lisa.recruiter@company.com',
    firstName: 'Lisa',
    lastName: 'Wang',
    avatar: undefined,
    role: 'recruiter',
    jobTitle: 'Recruiter',
    department: 'Human Resources',
    location: 'New York, NY',
    phone: '+1 (555) 456-7890',
    startDate: '2022-09-01',
    employmentType: 'full_time',
  },
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const handleLogin = (email: string, _password: string) => {
    // Demo mode: any email/password works, default to employee role
    // Match specific emails to roles for demo
    let role: 'employee' | 'manager' | 'hr_admin' | 'recruiter' = 'employee'

    if (email.includes('manager')) {
      role = 'manager'
    } else if (email.includes('hr') || email.includes('jessica')) {
      role = 'hr_admin'
    } else if (email.includes('recruiter') || email.includes('lisa')) {
      role = 'recruiter'
    }

    const user = mockUsers[role]
    setCurrentUser(user)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  if (!currentUser) {
    return null
  }

  return (
    <AppLayout user={currentUser} onLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<Dashboard user={currentUser} />} />
        <Route path="/profile" element={<Profile user={currentUser} />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/org-chart" element={<OrgChart />} />
        <Route path="/vacation" element={<Vacation user={currentUser} />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/faq-assistant" element={<FAQAssistant />} />
        <Route path="/headcount" element={<Headcount />} />
        <Route path="/employee-movements" element={<EmployeeMovements />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/knowledge-base" element={<KnowledgeBase user={currentUser} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppLayout>
  )
}
