import { DashboardHeader } from "@/components/dashboard-header"
import { PaymentHistory } from "@/components/payment-history"
import { BalanceTopup } from "@/components/balance-topup"
import { AutopaySettings } from "@/components/autopay-settings"
import { CurrentBills } from "@/components/current-bills"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Wallet, CreditCard, Receipt } from "lucide-react"
import Link from "next/link"

export default function PaymentsPage() {
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
          <h1 className="text-3xl font-bold">Счета и платежи</h1>
          <p className="text-muted-foreground">Управляйте своими финансами и настройками оплаты</p>
        </div>

        {/* Balance overview */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Текущий баланс</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">850 ₽</div>
              <p className="text-xs text-muted-foreground">Достаточно до 15.02.2025</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">К доплате</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0 ₽</div>
              <p className="text-xs text-muted-foreground">Все счета оплачены</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">За месяц</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">800 ₽</div>
              <p className="text-xs text-muted-foreground">Оплачено в январе</p>
            </CardContent>
          </Card>
        </div>

        {/* Current bills */}
        <CurrentBills />

        {/* Two column layout */}
        <div className="grid gap-6 lg:grid-cols-2">
          <BalanceTopup />
          <AutopaySettings />
        </div>

        {/* Payment history */}
        <PaymentHistory />
      </main>
    </div>
  )
}
