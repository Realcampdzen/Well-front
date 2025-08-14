import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wifi, CreditCard, Download, Upload } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Current Plan */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Текущий тариф</CardTitle>
          <Wifi className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Домашний 100</div>
          <p className="text-xs text-muted-foreground">100 Мбит/с</p>
          <div className="mt-2">
            <div className="flex items-center justify-between text-xs">
              <span>Скорость</span>
              <span>98 Мбит/с</span>
            </div>
            <Progress value={98} className="mt-1" />
          </div>
        </CardContent>
      </Card>

      {/* Balance */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Баланс</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">850 ₽</div>
          <p className="text-xs text-muted-foreground">Достаточно до 15.02.2025</p>
        </CardContent>
      </Card>

      {/* Download Traffic */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Загружено</CardTitle>
          <Download className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">127.5 ГБ</div>
          <p className="text-xs text-muted-foreground">За текущий месяц</p>
        </CardContent>
      </Card>

      {/* Upload Traffic */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Отправлено</CardTitle>
          <Upload className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">23.8 ГБ</div>
          <p className="text-xs text-muted-foreground">За текущий месяц</p>
        </CardContent>
      </Card>
    </div>
  )
}
