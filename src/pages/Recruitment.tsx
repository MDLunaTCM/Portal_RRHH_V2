import { Users, Plus, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';

const pipelineStages = [
  { name: 'New', count: 12, color: 'bg-blue-500' },
  { name: 'Screening', count: 8, color: 'bg-purple-500' },
  { name: 'Interview', count: 5, color: 'bg-yellow-500' },
  { name: 'Offer', count: 3, color: 'bg-green-500' },
  { name: 'Hired', count: 2, color: 'bg-emerald-500' },
];

const mockCandidates = [
  {
    id: '1',
    name: 'Alex Thompson',
    email: 'alex.thompson@email.com',
    position: 'Senior Software Engineer',
    status: 'interview' as const,
    appliedDate: '2024-11-25',
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.garcia@email.com',
    position: 'Product Designer',
    status: 'offer' as const,
    appliedDate: '2024-11-20',
  },
  {
    id: '3',
    name: 'James Wilson',
    email: 'james.wilson@email.com',
    position: 'Marketing Manager',
    status: 'screening' as const,
    appliedDate: '2024-11-28',
  },
];

export function Recruitment() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recruitment Pipeline</h1>
          <p className="text-muted-foreground mt-1">
            Manage candidates and track hiring progress
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Candidate
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {pipelineStages.map((stage) => (
          <Card key={stage.name}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{stage.name}</span>
                <div className={`h-2 w-2 rounded-full ${stage.color}`}></div>
              </div>
              <p className="text-3xl font-bold">{stage.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Active Candidates</CardTitle>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCandidates.map((candidate) => (
              <div
                key={candidate.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar name={candidate.name} size="md" />
                  <div>
                    <h3 className="font-semibold">{candidate.name}</h3>
                    <p className="text-sm text-muted-foreground">{candidate.position}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Applied: {candidate.appliedDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="capitalize">
                    {candidate.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
