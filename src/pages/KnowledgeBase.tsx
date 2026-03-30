import { useState } from 'react'
import { Search, Plus, Edit, Trash2, Eye, BookOpen, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { EmptyState } from '@/components/ui/EmptyState'
import { User, KnowledgeArticle } from '@/types'

interface KnowledgeBaseProps {
  user: User
}

const mockArticles: KnowledgeArticle[] = [
  {
    id: '1',
    title: 'How to Request Time Off',
    content:
      'Navigate to Vacation Requests and click New Request. Select your dates and reason, then submit for approval.',
    category: 'Time Off',
    published: true,
    createdDate: '2024-10-15',
    updatedDate: '2024-11-20',
    author: 'Jessica Lee',
  },
  {
    id: '2',
    title: 'Benefits Enrollment Guide',
    content:
      'Annual benefits enrollment period runs from November 1-30. Review all options and make your elections in the benefits portal.',
    category: 'Benefits',
    published: true,
    createdDate: '2024-09-01',
    updatedDate: '2024-10-31',
    author: 'Jessica Lee',
  },
  {
    id: '3',
    title: 'Remote Work Policy',
    content:
      'Eligible employees may work remotely up to 2 days per week with manager approval. Schedule must be coordinated with team.',
    category: 'Policies',
    published: true,
    createdDate: '2024-08-20',
    updatedDate: '2024-08-20',
    author: 'Jessica Lee',
  },
  {
    id: '4',
    title: 'Expense Reimbursement Process',
    content:
      'Submit expenses within 30 days using the expense portal. Include receipts for all items over $25.',
    category: 'Finance',
    published: true,
    createdDate: '2024-07-10',
    updatedDate: '2024-11-01',
    author: 'Finance Team',
  },
  {
    id: '5',
    title: 'Career Development Opportunities',
    content:
      'Learn about internal mobility, training programs, and career advancement paths within the organization.',
    category: 'Career',
    published: false,
    createdDate: '2024-11-20',
    updatedDate: '2024-11-20',
    author: 'Jessica Lee',
  },
]

export function KnowledgeBase({ user }: KnowledgeBaseProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [selectedArticle, setSelectedArticle] = useState<KnowledgeArticle | null>(null)

  const isAdmin = user.role === 'hr_admin'

  const filteredArticles = mockArticles.filter((article) => {
    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter

    const matchesPublished = isAdmin || article.published

    return matchesSearch && matchesCategory && matchesPublished
  })

  const categories = Array.from(new Set(mockArticles.map((a) => a.category)))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
          <p className="text-muted-foreground mt-1">
            Browse articles and company resources
          </p>
        </div>
        {isAdmin && (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Article
          </Button>
        )}
      </div>

      {isAdmin ? (
        <Tabs defaultValue="articles" className="w-full">
          <TabsList>
            <TabsTrigger value="articles">Manage Articles</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>

                  <Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="all">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="space-y-3">
                  {filteredArticles.map((article) => (
                    <div
                      key={article.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{article.title}</h3>
                          {article.published ? (
                            <Badge variant="success" className="text-xs">
                              Published
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">
                              Draft
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {article.content.substring(0, 100)}...
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>By {article.author}</span>
                          <span>•</span>
                          <span>Updated {article.updatedDate}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setSelectedArticle(article)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{mockArticles.length}</p>
                    <p className="text-sm text-muted-foreground mt-1">Total Articles</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">
                      {mockArticles.filter((a) => a.published).length}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Published</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">2,847</p>
                    <p className="text-sm text-muted-foreground mt-1">Total Views</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">4.8</p>
                    <p className="text-sm text-muted-foreground mt-1">Avg Rating</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>

                <Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                  <option value="all">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Select>
              </div>

              {filteredArticles.length === 0 ? (
                <EmptyState
                  icon={BookOpen}
                  title="No articles found"
                  description="Try adjusting your search or filters"
                />
              ) : (
                <div className="space-y-3">
                  {filteredArticles.map((article) => (
                    <div
                      key={article.id}
                      className="p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <h3 className="font-semibold mb-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {article.content.substring(0, 120)}...
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span>•</span>
                        <span>Updated {article.updatedDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {selectedArticle && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{selectedArticle.title}</CardTitle>
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>{selectedArticle.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated {selectedArticle.updatedDate}</span>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <p>{selectedArticle.content}</p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Written by {selectedArticle.author}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
