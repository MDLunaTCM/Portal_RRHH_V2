import { useState } from 'react';
import { Search, Mail, Phone, Grid2x2 as Grid, List } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/EmptyState';
import { User } from '@/types';

const mockEmployees: Partial<User>[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@company.com',
    jobTitle: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
  },
  {
    id: '2',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@company.com',
    jobTitle: 'Product Designer',
    department: 'Design',
    location: 'New York, NY',
    phone: '+1 (555) 234-5678',
  },
  {
    id: '3',
    firstName: 'Emily',
    lastName: 'Rodriguez',
    email: 'emily.rodriguez@company.com',
    jobTitle: 'Marketing Manager',
    department: 'Marketing',
    location: 'Austin, TX',
    phone: '+1 (555) 345-6789',
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Kim',
    email: 'david.kim@company.com',
    jobTitle: 'Data Analyst',
    department: 'Analytics',
    location: 'Seattle, WA',
    phone: '+1 (555) 456-7890',
  },
  {
    id: '5',
    firstName: 'Jessica',
    lastName: 'Lee',
    email: 'jessica.lee@company.com',
    jobTitle: 'HR Manager',
    department: 'Human Resources',
    location: 'Los Angeles, CA',
    phone: '+1 (555) 567-8901',
  },
  {
    id: '6',
    firstName: 'Alex',
    lastName: 'Thompson',
    email: 'alex.thompson@company.com',
    jobTitle: 'Sales Director',
    department: 'Sales',
    location: 'Chicago, IL',
    phone: '+1 (555) 678-9012',
  },
];

export function Directory() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const filteredEmployees = mockEmployees.filter((employee) => {
    const matchesSearch =
      searchQuery === '' ||
      employee.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment =
      departmentFilter === 'all' || employee.department === departmentFilter;

    const matchesLocation = locationFilter === 'all' || employee.location?.includes(locationFilter);

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Employee Directory</h1>
        <p className="text-muted-foreground mt-1">Browse and search company employees</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <Select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              <option value="all">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Analytics">Analytics</option>
            </Select>

            <Select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
              <option value="all">All Locations</option>
              <option value="San Francisco">San Francisco</option>
              <option value="New York">New York</option>
              <option value="Austin">Austin</option>
              <option value="Seattle">Seattle</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </Select>

            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {filteredEmployees.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <EmptyState
              icon={Search}
              title="No employees found"
              description="Try adjusting your search criteria or filters"
            />
          </CardContent>
        </Card>
      ) : viewMode === 'grid' ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEmployees.map((employee) => (
            <Card key={employee.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar
                    name={`${employee.firstName} ${employee.lastName}`}
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="font-semibold text-lg">
                    {employee.firstName} {employee.lastName}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{employee.jobTitle}</p>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="secondary">{employee.department}</Badge>
                  </div>
                  <div className="w-full mt-4 pt-4 border-t space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{employee.email}</span>
                    </div>
                    {employee.phone && (
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{employee.phone}</span>
                      </div>
                    )}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {filteredEmployees.map((employee, index) => (
                <div
                  key={employee.id}
                  className={`flex items-center justify-between py-4 ${
                    index !== filteredEmployees.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Avatar name={`${employee.firstName} ${employee.lastName}`} size="md" />
                    <div>
                      <h3 className="font-semibold">
                        {employee.firstName} {employee.lastName}
                      </h3>
                      <p className="text-sm text-muted-foreground">{employee.jobTitle}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {employee.department}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{employee.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:block text-right">
                      <p className="text-sm text-muted-foreground">{employee.email}</p>
                      {employee.phone && (
                        <p className="text-sm text-muted-foreground">{employee.phone}</p>
                      )}
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
