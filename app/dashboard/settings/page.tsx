import { DashboardHeader } from "@/components/dashboard-header"
import { ProfileSettings } from "@/components/profile-settings"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к дашборду
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Настройки</h1>
          <p className="text-muted-foreground">Управляйте своим профилем и настройками аккаунта</p>
        </div>

        <ProfileSettings />
      </main>
    </div>
  )
}
