import { User } from '@/types';
import { EmployeeDashboard } from './dashboards/EmployeeDashboard';
import { ManagerDashboard } from './dashboards/ManagerDashboard';
import { HRAdminDashboard } from './dashboards/HRAdminDashboard';

interface DashboardProps {
  user: User;
}

export function Dashboard({ user }: DashboardProps) {
  if (user.role === 'manager') {
    return <ManagerDashboard user={user} />;
  }

  if (user.role === 'hr_admin') {
    return <HRAdminDashboard user={user} />;
  }

  return <EmployeeDashboard user={user} />;
}
