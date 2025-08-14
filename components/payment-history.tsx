import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Filter } from "lucide-react"

const payments = [
  {
    id: "PAY-2025-001",
    date: "15.01.2025",
    amount: 800,
    description: "Оплата за интернет (январь 2025)",
    status: "success",
    method: "Банковская карта",
  },
  {
    id: "PAY-2024-012",
    date: "15.12.2024",
    amount: 800,
    description: "Оплата за интернет (декабрь 2024)",
    status: "success",
    method: "Банковская карта",
  },
  {
    id: "PAY-2024-011",
    date: "15.11.2024",
    amount: 800,
    description: "Оплата за интернет (ноябрь 2024)",
    status: "success",
    method: "Автоплатеж",
  },
  {
    id: "PAY-2024-010",
    date: "15.10.2024",
    amount: 800,
    description: "Оплата за интернет (октябрь 2024)",
    status: "success",
    method: "Банковская карта",
  },
  {
    id: "PAY-2024-009",
    date: "10.10.2024",
    amount: 500,
    description: "Пополнение баланса",
    status: "success",
    method: "Банковская карта",
  },
]

export function PaymentHistory() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Оплачено
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            В обработке
          </Badge>
        )
      case "failed":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            Отклонено
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>История платежей</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Фильтр
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Экспорт
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{payment.description}</p>
                  {getStatusBadge(payment.status)}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{payment.date}</span>
                  <span>•</span>
                  <span>{payment.method}</span>
                  <span>•</span>
                  <span>№{payment.id}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">{payment.amount} ₽</div>
                <Button variant="ghost" size="sm" className="text-xs">
                  <Download className="h-3 w-3 mr-1" />
                  Чек
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
