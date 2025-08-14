import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download } from "lucide-react"

const bills = [
  {
    id: "BILL-2025-02",
    period: "Февраль 2025",
    amount: 800,
    dueDate: "15.02.2025",
    status: "pending",
    description: "Абонентская плата за интернет",
  },
  {
    id: "BILL-2025-01",
    period: "Январь 2025",
    amount: 800,
    dueDate: "15.01.2025",
    status: "paid",
    description: "Абонентская плата за интернет",
  },
]

export function CurrentBills() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Оплачено
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            К оплате
          </Badge>
        )
      case "overdue":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            Просрочено
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Текущие счета</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bills.map((bill) => (
            <div key={bill.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{bill.description}</p>
                  {getStatusBadge(bill.status)}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{bill.period}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>до {bill.dueDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-lg font-semibold">{bill.amount} ₽</div>
                </div>
                <div className="flex flex-col gap-1">
                  {bill.status === "pending" && (
                    <Button size="sm" className="text-xs">
                      Оплатить
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Download className="h-3 w-3 mr-1" />
                    Счет
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
