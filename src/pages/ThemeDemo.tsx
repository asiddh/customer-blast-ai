import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Info,
  Moon,
  Sun,
  Menu,
  X
} from "lucide-react";

const ThemeDemo = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Users, label: "Customers", badge: "12" },
    { icon: MessageSquare, label: "Campaigns" },
    { icon: Settings, label: "Settings" },
  ];

  const stats = [
    { label: "Total Campaigns", value: "2,847", change: "+12.5%", positive: true },
    { label: "Active Users", value: "14.2K", change: "+5.3%", positive: true },
    { label: "Revenue", value: "$127.4K", change: "-2.1%", positive: false },
    { label: "Conversion Rate", value: "3.24%", change: "+0.8%", positive: true },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className={`twilio-sidebar ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center border-b border-sidebar-border px-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-lg font-semibold text-sidebar-foreground">Twilio Console</span>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={item.active ? 'twilio-sidebar-nav-active' : 'twilio-sidebar-nav'}
            >
              <item.icon className="h-5 w-5" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="h-5 text-xs">
                  {item.badge}
                </Badge>
              )}
            </a>
          ))}
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gradient-primary"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
              <p className="text-xs text-sidebar-foreground/60 truncate">john@company.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="twilio-main">
        {/* Top Navigation */}
        <header className="twilio-topnav">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-64 twilio-input"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch checked={darkMode} onCheckedChange={toggleTheme} />
                <Moon className="h-4 w-4" />
              </div>

              <Button className="twilio-button-primary">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="space-y-6">
          {/* Page Header */}
          <div>
            <h1 className="twilio-heading-1">Dashboard</h1>
            <p className="twilio-text-muted mt-2">
              Welcome to your Twilio Console. Here's what's happening with your campaigns today.
            </p>
          </div>

          {/* Alerts */}
          <div className="space-y-4">
            <Alert className="twilio-alert-destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Your API rate limit is at 85%. Consider upgrading your plan to avoid service interruption.
              </AlertDescription>
            </Alert>

            <Alert className="twilio-alert-warning">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Scheduled maintenance will occur on Sunday, March 15th from 2:00 AM - 4:00 AM PST.
              </AlertDescription>
            </Alert>

            <Alert className="twilio-alert-success">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Your account verification is complete. All features are now available.
              </AlertDescription>
            </Alert>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="twilio-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.positive ? 'text-success' : 'text-destructive'}`}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs Section */}
          <Card className="twilio-card">
            <CardHeader>
              <CardTitle className="twilio-heading-2">Campaign Management</CardTitle>
              <CardDescription>
                Manage and monitor your communication campaigns across all channels.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="sms">SMS</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="twilio-heading-3">Recent Campaigns</h3>
                      <Button variant="outline" size="sm">
                        View All
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { name: "Welcome Series", status: "Active", sent: "2,847", rate: "24.3%" },
                        { name: "Product Launch", status: "Scheduled", sent: "0", rate: "0%" },
                        { name: "Customer Survey", status: "Completed", sent: "1,234", rate: "18.7%" },
                      ].map((campaign, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <div>
                              <p className="font-medium">{campaign.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {campaign.sent} sent • {campaign.rate} open rate
                              </p>
                            </div>
                          </div>
                          <Badge 
                            variant={campaign.status === 'Active' ? 'default' : 'secondary'}
                            className={campaign.status === 'Active' ? 'bg-success text-success-foreground' : ''}
                          >
                            {campaign.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="sms" className="mt-6">
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="twilio-heading-3 mb-2">SMS Campaigns</h3>
                    <p className="twilio-text-muted mb-4">
                      Create and manage your SMS marketing campaigns
                    </p>
                    <Button className="twilio-button-primary">
                      Create SMS Campaign
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="email" className="mt-6">
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="twilio-heading-3 mb-2">Email Campaigns</h3>
                    <p className="twilio-text-muted mb-4">
                      Design and send beautiful email campaigns
                    </p>
                    <Button className="twilio-button-primary">
                      Create Email Campaign
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="whatsapp" className="mt-6">
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="twilio-heading-3 mb-2">WhatsApp Campaigns</h3>
                    <p className="twilio-text-muted mb-4">
                      Engage customers through WhatsApp Business
                    </p>
                    <Button className="twilio-button-primary">
                      Create WhatsApp Campaign
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Component Showcase */}
          <Card className="twilio-card">
            <CardHeader>
              <CardTitle className="twilio-heading-2">UI Components Showcase</CardTitle>
              <CardDescription>
                Examples of the Twilio-inspired theme components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Buttons */}
              <div>
                <h3 className="twilio-heading-3 mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button className="twilio-button-primary">Primary</Button>
                  <Button className="twilio-button-secondary">Secondary</Button>
                  <Button className="twilio-button-ghost">Ghost</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              {/* Form Elements */}
              <div>
                <h3 className="twilio-heading-3 mb-4">Form Elements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                  <Input placeholder="Email address" className="twilio-input" />
                  <Input placeholder="Password" type="password" className="twilio-input" />
                </div>
              </div>

              {/* Badges */}
              <div>
                <h3 className="twilio-heading-3 mb-4">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge className="bg-success text-success-foreground">Success</Badge>
                  <Badge className="bg-warning text-warning-foreground">Warning</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThemeDemo;