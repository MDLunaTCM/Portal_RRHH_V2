import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Building2 className="h-7 w-7" />
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to access your HR portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>

              <button
                type="button"
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                Forgot password?
              </button>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Sign in
            </Button>
          </form>

          <div className="text-center text-xs text-muted-foreground">
            <p>For demo purposes, use any email and password</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 bg-muted items-center justify-center p-12">
        <div className="max-w-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Your HR hub, all in one place
            </h2>
            <p className="text-lg text-muted-foreground">
              Access everything you need to manage your work life, from time off requests to
              company announcements.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Self-service portal</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your profile, request time off, and access documents anytime
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Stay connected</h3>
                <p className="text-sm text-muted-foreground">
                  Browse the employee directory and stay up to date with company news
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Get help instantly</h3>
                <p className="text-sm text-muted-foreground">
                  Use our FAQ assistant to find answers to common HR questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
