import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { QuickActions } from "@/components/quick-actions"
import { ConnectionStatus } from "@/components/connection-status"
import { RecentPayments } from "@/components/recent-payments"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Welcome section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Добро пожаловать, Иван!</h1>
          <p className="text-muted-foreground">Управляйте своим подключением и следите за статистикой использования</p>
        </div>

        {/* Stats cards */}
        <DashboardStats />

        {/* Quick actions */}
        <QuickActions />

        {/* Two column layout for additional info */}
        <div className="grid gap-6 lg:grid-cols-2">
          <ConnectionStatus />
          <RecentPayments />
        </div>
      </main>
    </div>
  )
}
