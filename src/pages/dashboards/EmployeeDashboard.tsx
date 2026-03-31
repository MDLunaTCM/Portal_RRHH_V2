import { Calendar, FileText, Megaphone, GraduationCap, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { User } from '@/types';

interface EmployeeDashboardProps {
  user: User;
}

export function EmployeeDashboard({ user }: EmployeeDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {user.firstName}
        </h1>
        <p className="text-muted-foreground mt-1">
          Here's what's happening with your work today
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Vacation Days</p>
                <p className="text-2xl font-bold mt-1">15</p>
                <p className="text-xs text-muted-foreground mt-1">of 20 remaining</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center shadow-lg shadow-secondary/20">
                <Calendar className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Requests</p>
                <p className="text-2xl font-bold mt-1">2</p>
                <p className="text-xs text-muted-foreground mt-1">awaiting approval</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Documents</p>
                <p className="text-2xl font-bold mt-1">12</p>
                <p className="text-xs text-muted-foreground mt-1">available to view</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shadow-lg shadow-accent/20">
                <FileText className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Time at Company</p>
                <p className="text-2xl font-bold mt-1">2.5y</p>
                <p className="text-xs text-muted-foreground mt-1">since {user.startDate}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button variant="outline" className="justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Request Time Off
              </Button>
              <Button variant="outline" className="justify-start">
                <FileText className="h-4 w-4 mr-2" />
                View Pay Stubs
              </Button>
              <Button variant="outline" className="justify-start">
                <GraduationCap className="h-4 w-4 mr-2" />
                Complete Onboarding Tasks
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Time Off</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">Holiday Break</p>
                  <p className="text-sm text-muted-foreground">Dec 20 - Dec 27, 2024</p>
                </div>
                <Badge variant="success">Approved</Badge>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">Summer Vacation</p>
                  <p className="text-sm text-muted-foreground">Jul 15 - Jul 22, 2025</p>
                </div>
                <Badge variant="outline">Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Announcements</CardTitle>
            <Megaphone className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="warning">Important</Badge>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
                <p className="font-medium">Holiday Party - December 15th</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Join us for our annual holiday celebration at the downtown office
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">General</Badge>
                  <p className="text-xs text-muted-foreground">1 week ago</p>
                </div>
                <p className="font-medium">New Benefits Package Available</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Review the updated benefits options in the document center
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Onboarding Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Overall Completion</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-secondary h-2.5 rounded-full shadow-lg shadow-secondary/50" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span className="text-sm">Complete profile information</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span className="text-sm">Review company policies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-muted"></div>
                  <span className="text-sm text-muted-foreground">Set up direct deposit</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
