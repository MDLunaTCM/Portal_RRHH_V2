import { Network, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';

export function OrgChart() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organization Chart</h1>
          <p className="text-muted-foreground mt-1">View company hierarchy and reporting structure</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8 p-8">
        <Card className="w-80">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar name="Jennifer Martinez" size="lg" />
              <h3 className="font-semibold text-lg mt-3">Jennifer Martinez</h3>
              <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
              <Badge variant="secondary" className="mt-2">
                Executive
              </Badge>
            </div>
          </CardContent>
        </Card>

        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-border"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-8 bg-border"></div>
            </div>
            <Card className="w-72">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar name="Robert Kim" size="md" />
                  <h3 className="font-semibold mt-3">Robert Kim</h3>
                  <p className="text-sm text-muted-foreground">CTO</p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    Engineering
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-border"></div>
            </div>

            <div className="space-y-3">
              <Card className="w-64 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar name="Sarah Johnson" size="sm" />
                    <div className="text-left">
                      <p className="font-medium text-sm">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Lead Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-64 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar name="Michael Chen" size="sm" />
                    <div className="text-left">
                      <p className="font-medium text-sm">Michael Chen</p>
                      <p className="text-xs text-muted-foreground">Senior Engineer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-8 bg-border"></div>
            </div>
            <Card className="w-72">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar name="Amanda Foster" size="md" />
                  <h3 className="font-semibold mt-3">Amanda Foster</h3>
                  <p className="text-sm text-muted-foreground">VP of Sales</p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    Sales
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-border"></div>
            </div>

            <div className="space-y-3">
              <Card className="w-64 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar name="Alex Thompson" size="sm" />
                    <div className="text-left">
                      <p className="font-medium text-sm">Alex Thompson</p>
                      <p className="text-xs text-muted-foreground">Sales Director</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-64 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar name="Emily Rodriguez" size="sm" />
                    <div className="text-left">
                      <p className="font-medium text-sm">Emily Rodriguez</p>
                      <p className="text-xs text-muted-foreground">Account Executive</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-8 bg-border"></div>
            </div>
            <Card className="w-72">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar name="Jessica Lee" size="md" />
                  <h3 className="font-semibold mt-3">Jessica Lee</h3>
                  <p className="text-sm text-muted-foreground">VP of HR</p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    Human Resources
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-border"></div>
            </div>

            <div className="space-y-3">
              <Card className="w-64 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar name="David Kim" size="sm" />
                    <div className="text-left">
                      <p className="font-medium text-sm">David Kim</p>
                      <p className="text-xs text-muted-foreground">HR Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-64 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar name="Lisa Wang" size="sm" />
                    <div className="text-left">
                      <p className="font-medium text-sm">Lisa Wang</p>
                      <p className="text-xs text-muted-foreground">Recruiter</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5" />
            Quick Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold">247</p>
              <p className="text-sm text-muted-foreground">Total Employees</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">Departments</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Teams</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">Office Locations</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
