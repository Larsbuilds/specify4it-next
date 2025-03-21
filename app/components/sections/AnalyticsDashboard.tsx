"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  Clock, 
  Activity, 
  Globe, 
  Smartphone, 
  Monitor,
  Zap,
  AlertCircle
} from "lucide-react"

// This is mock data for demo purposes
// In production, this would come from Vercel Analytics API
const analyticsData = {
  pageViews: 1234,
  uniqueVisitors: 789,
  averageSessionDuration: "2m 30s",
  bounceRate: "45%",
  topPages: [
    { path: "/", views: 500 },
    { path: "/about", views: 300 },
    { path: "/features", views: 200 },
    { path: "/pricing", views: 150 },
    { path: "/contact", views: 84 },
  ],
  devices: {
    mobile: 65,
    desktop: 35,
  },
  performance: {
    fcp: "1.2s",
    lcp: "2.5s",
    fid: "20ms",
    cls: "0.1",
  },
  errors: 12,
  countries: [
    { country: "US", visitors: 500 },
    { country: "UK", visitors: 300 },
    { country: "DE", visitors: 200 },
    { country: "FR", visitors: 150 },
    { country: "JP", visitors: 100 },
  ],
}

export function AnalyticsDashboard() {
  return (
    <section id="analytics" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="container px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
            Analytics Dashboard
          </h2>
          <p className="max-w-[600px] mx-auto text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400">
            Real-time insights into your website's performance and user behavior
          </p>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.pageViews}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.uniqueVisitors}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.averageSessionDuration}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.bounceRate}</div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">First Contentful Paint</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.performance.fcp}</div>
              <p className="text-xs text-muted-foreground">Target: &lt; 1.8s</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Largest Contentful Paint</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.performance.lcp}</div>
              <p className="text-xs text-muted-foreground">Target: &lt; 2.5s</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">First Input Delay</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.performance.fid}</div>
              <p className="text-xs text-muted-foreground">Target: &lt; 100ms</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cumulative Layout Shift</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.performance.cls}</div>
              <p className="text-xs text-muted-foreground">Target: &lt; 0.1</p>
            </CardContent>
          </Card>
        </div>

        {/* Device Distribution */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Device Distribution</CardTitle>
              <CardDescription>Visitors by device type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>Mobile</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  <span>Desktop</span>
                </div>
              </div>
              <div className="flex h-4 rounded-full bg-muted">
                <div 
                  className="flex h-full rounded-full bg-primary" 
                  style={{ width: `${analyticsData.devices.mobile}%` }}
                />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {analyticsData.devices.mobile}% Mobile, {analyticsData.devices.desktop}% Desktop
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{page.path}</span>
                    <span className="text-sm font-medium">{page.views} views</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>Visitors by country</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.countries.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm">{country.country}</span>
                  </div>
                  <span className="text-sm font-medium">{country.visitors} visitors</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 