import { useState } from 'react';
import { FileText, Download, Eye, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/EmptyState';

const mockDocuments = [
  {
    id: '1',
    name: 'Pay Stub - December 2024',
    type: 'Pay Stub',
    category: 'payroll',
    issueDate: '2024-12-01',
    size: '125 KB',
  },
  {
    id: '2',
    name: 'W-2 Form 2024',
    type: 'Tax Form',
    category: 'tax',
    issueDate: '2024-01-31',
    size: '89 KB',
  },
  {
    id: '3',
    name: 'Employment Contract',
    type: 'Contract',
    category: 'contract',
    issueDate: '2022-06-15',
    size: '256 KB',
  },
  {
    id: '4',
    name: 'Benefits Summary 2024',
    type: 'Benefits',
    category: 'benefits',
    issueDate: '2024-01-01',
    size: '178 KB',
  },
  {
    id: '5',
    name: 'Employee Handbook',
    type: 'Policy',
    category: 'policy',
    issueDate: '2024-01-01',
    size: '2.1 MB',
  },
];

export function Documents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredDocuments = mockDocuments.filter((doc) => {
    const matchesSearch =
      searchQuery === '' ||
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'all' || doc.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Document Center</h1>
        <p className="text-muted-foreground mt-1">
          Access your employment documents and company policies
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="payroll">Payroll</option>
              <option value="tax">Tax Forms</option>
              <option value="contract">Contracts</option>
              <option value="benefits">Benefits</option>
              <option value="policy">Policies</option>
            </Select>

            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="tax">Tax Forms</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Documents</CardTitle>
            </CardHeader>
            <CardContent>
              {filteredDocuments.length === 0 ? (
                <EmptyState
                  icon={FileText}
                  title="No documents found"
                  description="Try adjusting your search or filters"
                />
              ) : (
                <div className="space-y-2">
                  {filteredDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{doc.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {doc.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Issued: {doc.issueDate}
                            </span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mockDocuments
                  .filter((doc) => doc.category === 'payroll')
                  .map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{doc.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Issued: {doc.issueDate} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tax">
          <Card>
            <CardHeader>
              <CardTitle>Tax Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <EmptyState
                icon={FileText}
                title="No tax documents available"
                description="Tax documents will appear here when available"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits">
          <Card>
            <CardHeader>
              <CardTitle>Benefits Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mockDocuments
                  .filter((doc) => doc.category === 'benefits')
                  .map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{doc.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Issued: {doc.issueDate} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies">
          <Card>
            <CardHeader>
              <CardTitle>Company Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mockDocuments
                  .filter((doc) => doc.category === 'policy')
                  .map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{doc.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Issued: {doc.issueDate} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
