import { DashboardHeader } from "@/components/dashboard-header"
import { SupportForm } from "@/components/support-form"
import { SupportTickets } from "@/components/support-tickets"
import { FaqSection } from "@/components/faq-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto p-4 space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к дашборду
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Техническая поддержка</h1>
          <p className="text-muted-foreground">Мы готовы помочь вам решить любые вопросы</p>
        </div>

        {/* Contact methods */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Телефон</CardTitle>
              <Phone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">+7 (812) 677-66-20</div>
              <p className="text-xs text-muted-foreground">Круглосуточно, без выходных</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Онлайн-чат</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="sm">
                Начать чат
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Среднее время ответа: 2 минуты</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Email</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium">support@well-telecom.ru</div>
              <p className="text-xs text-muted-foreground">Ответ в течение 4 часов</p>
            </CardContent>
          </Card>
        </div>

        {/* Support form and tickets */}
        <div className="grid gap-6 lg:grid-cols-2">
          <SupportForm />
          <SupportTickets />
        </div>

        {/* FAQ */}
        <FaqSection />
      </main>
    </div>
  )
}
