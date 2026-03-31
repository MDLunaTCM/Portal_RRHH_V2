import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  Users,
  Network,
  Calendar,
  FileText,
  Megaphone,
  Briefcase,
  UsersRound,
  GraduationCap,
  MessageCircleQuestion,
  Settings,
  Building2,
  TrendingUp,
  FileStack,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserRole } from '@/types';

interface NavItem {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
  roles: UserRole[];
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
    roles: ['employee', 'manager', 'hr_admin', 'recruiter', 'it_admin'],
  },
  {
    label: 'My Profile',
    href: '/profile',
    icon: User,
    roles: ['employee', 'manager', 'hr_admin', 'recruiter', 'it_admin'],
  },
  {
    label: 'Directory',
    href: '/directory',
    icon: Users,
    roles: ['employee', 'manager', 'hr_admin', 'recruiter', 'it_admin'],
  },
  {
    label: 'Org Chart',
    href: '/org-chart',
    icon: Network,
    roles: ['employee', 'manager', 'hr_admin', 'recruiter', 'it_admin'],
  },
  {
    label: 'Vacation Requests',
    href: '/vacation',
    icon: Calendar,
    roles: ['employee', 'manager', 'hr_admin'],
  },
  {
    label: 'Document Center',
    href: '/documents',
    icon: FileText,
    roles: ['employee', 'manager', 'hr_admin', 'recruiter', 'it_admin'],
  },
  {
    label: 'Announcements',
    href: '/announcements',
    icon: Megaphone,
    roles: ['employee', 'manager', 'hr_admin', 'recruiter', 'it_admin'],
  },
  {
    label: 'Recruitment',
    href: '/recruitment',
    icon: Briefcase,
    roles: ['hr_admin', 'recruiter'],
  },
  {
    label: 'Requisitions',
    href: '/requisitions',
    icon: FileStack,
    roles: ['manager', 'hr_admin', 'recruiter'],
  },
  {
    label: 'Headcount',
    href: '/headcount',
    icon: TrendingUp,
    roles: ['hr_admin', 'manager'],
  },
  {
    label: 'Employees',
    href: '/employees',
    icon: UsersRound,
    roles: ['hr_admin'],
  },
  {
    label: 'Onboarding',
    href: '/onboarding',
    icon: GraduationCap,
    roles: ['hr_admin', 'manager'],
  },
  {
    label: 'Knowledge Base',
    href: '/knowledge-base',
    icon: Building2,
    roles: ['hr_admin'],
  },
  {
    label: 'FAQ Assistant',
    href: '/faq-assistant',
    icon: MessageCircleQuestion,
    roles: ['employee', 'manager', 'hr_admin', 'recruiter', 'it_admin'],
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
    roles: ['employee', 'manager', 'hr_admin', 'recruiter', 'it_admin'],
  },
];

interface SidebarProps {
  userRole: UserRole;
  collapsed?: boolean;
}

export function Sidebar({ userRole, collapsed }: SidebarProps) {
  const location = useLocation();
  const filteredNavItems = navItems.filter((item) => item.roles.includes(userRole));

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen border-r bg-background transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" />
          </div>
          {!collapsed && <span className="font-semibold text-lg">HR Portal</span>}
        </div>
      </div>

      <nav className="flex flex-col gap-1 p-4">
        {filteredNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-secondary text-secondary-foreground shadow-md shadow-secondary/30 font-semibold'
                  : 'text-muted-foreground hover:bg-secondary/40 hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
