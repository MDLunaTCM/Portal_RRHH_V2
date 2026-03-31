import { useState } from 'react';
import { Search, Bell, Menu, LogOut, User as UserIcon, Settings } from 'lucide-react';
import { Avatar } from '@/components/ui/Avatar';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { User } from '@/types';

interface HeaderProps {
  user: User;
  onToggleSidebar?: () => void;
  onLogout?: () => void;
}

export function Header({ user, onToggleSidebar, onLogout }: HeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-30 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center gap-4 px-6">
        <Button variant="ghost" size="sm" onClick={onToggleSidebar} className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search employees, documents, policies..."
              className="pl-9"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserMenu(false);
              }}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
            </Button>

            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 rounded-lg border bg-background shadow-lg">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="p-4">
                  <div className="flex flex-col gap-3">
                    <div className="text-sm">
                      <p className="font-medium">Vacation request approved</p>
                      <p className="text-muted-foreground">Your request for Dec 20-22 was approved</p>
                      <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">New announcement</p>
                      <p className="text-muted-foreground">Holiday party details announced</p>
                      <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <ThemeToggle />

          <div className="h-6 w-px bg-border"></div>

          <div className="relative">
            <button
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary transition-colors"
            >
              <Avatar src={user.avatar} name={`${user.firstName} ${user.lastName}`} size="sm" />
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium leading-none">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-muted-foreground">{user.jobTitle}</p>
              </div>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 top-12 w-56 rounded-lg border bg-background shadow-lg">
                <div className="p-2">
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors">
                    <UserIcon className="h-4 w-4" />
                    My Profile
                  </button>
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors">
                    <Settings className="h-4 w-4" />
                    Settings
                  </button>
                  <div className="my-1 h-px bg-border"></div>
                  <button
                    onClick={onLogout}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-secondary transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
