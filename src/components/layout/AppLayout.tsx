import { useState, ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { User } from '@/types';

interface AppLayoutProps {
  user: User;
  children: ReactNode;
  onLogout?: () => void;
}

export function AppLayout({ user, children, onLogout }: AppLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      <Sidebar userRole={user.role} collapsed={sidebarCollapsed} />
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header
          user={user}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          onLogout={onLogout}
        />
        <main className="pt-16">
          <div className="container mx-auto px-6 py-8 max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
