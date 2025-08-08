import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, Layout, Smartphone, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Palette,
      title: "Twilio-Inspired Design",
      description: "Deep navy backgrounds with vibrant red accents, maintaining Twilio's professional aesthetic"
    },
    {
      icon: Layout,
      title: "Responsive Layout",
      description: "Card-based sections with sticky navigation that adapts perfectly to any screen size"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Optimized for mobile devices with collapsible sidebars and touch-friendly interfaces"
    },
    {
      icon: Code,
      title: "Developer-Friendly",
      description: "Clean, semantic HTML with consistent padding, alignment, and comprehensive component library"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="relative px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              Twilio Console Theme
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Modern SaaS Dashboard
              <span className="block text-primary mt-2">Inspired by Twilio</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive design system featuring deep navy backgrounds, vibrant red accents, 
              and developer-friendly components built for modern SaaS applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link to="/theme-demo">
                <Button size="lg" className="twilio-button-primary">
                  View Theme Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Designed for Modern SaaS
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to build beautiful, professional dashboards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="twilio-card text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Color Palette Section */}
      <div className="px-6 py-24 bg-secondary/50 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Thoughtful Color System
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              HSL-based colors with light and dark mode support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="h-16 w-full rounded-lg bg-primary mb-3"></div>
              <p className="text-sm font-medium">Twilio Red</p>
              <p className="text-xs text-muted-foreground">#F22F46</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-full rounded-lg bg-twilio-navy mb-3"></div>
              <p className="text-sm font-medium">Deep Navy</p>
              <p className="text-xs text-muted-foreground">Background</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-full rounded-lg bg-accent mb-3"></div>
              <p className="text-sm font-medium">Cool Blue</p>
              <p className="text-xs text-muted-foreground">Accents</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-full rounded-lg bg-twilio-gray mb-3"></div>
              <p className="text-sm font-medium">Light Gray</p>
              <p className="text-xs text-muted-foreground">#F4F4F6</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the complete theme with interactive components and see how it adapts to both light and dark modes.
          </p>
          <div className="mt-8">
            <Link to="/theme-demo">
              <Button size="lg" className="twilio-button-primary">
                Explore Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;