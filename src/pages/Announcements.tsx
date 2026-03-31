import { Plus, Pin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const mockAnnouncements = [
  {
    id: '1',
    title: 'Holiday Party - December 15th',
    content:
      'Join us for our annual holiday celebration at the downtown office. Food, drinks, and festivities start at 6 PM.',
    category: 'Events',
    priority: 'high' as const,
    publishedDate: '2024-11-28',
    publishedBy: 'HR Team',
    pinned: true,
  },
  {
    id: '2',
    title: 'New Benefits Package Available',
    content:
      'We are excited to announce an enhanced benefits package for 2025. Review the details in the document center.',
    category: 'Benefits',
    priority: 'high' as const,
    publishedDate: '2024-11-20',
    publishedBy: 'HR Team',
    pinned: true,
  },
  {
    id: '3',
    title: 'Office Closure - December 24-26',
    content: 'Our offices will be closed for the holidays. Emergency contacts will be available.',
    category: 'Operations',
    priority: 'normal' as const,
    publishedDate: '2024-11-15',
    publishedBy: 'Operations',
    pinned: false,
  },
];

export function Announcements() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
          <p className="text-muted-foreground mt-1">Stay updated with company news and events</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Announcement
        </Button>
      </div>

      <div className="space-y-4">
        {mockAnnouncements
          .filter((a) => a.pinned)
          .map((announcement) => (
            <Card key={announcement.id} className="border-primary/50 bg-primary/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Pin className="h-4 w-4 text-primary" />
                      <Badge
                        variant={announcement.priority === 'high' ? 'warning' : 'secondary'}
                      >
                        {announcement.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{announcement.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{announcement.content}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Posted by {announcement.publishedBy}</span>
                  <span>•</span>
                  <span>{announcement.publishedDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Announcements</h2>
        <div className="space-y-4">
          {mockAnnouncements
            .filter((a) => !a.pinned)
            .map((announcement) => (
              <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{announcement.category}</Badge>
                      </div>
                      <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{announcement.content}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Posted by {announcement.publishedBy}</span>
                    <span>•</span>
                    <span>{announcement.publishedDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
