import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const payments = [
  {
    id: 1,
    date: "15.01.2025",
    amount: 800,
    description: "Оплата за интернет",
    status: "success",
  },
  {
    id: 2,
    date: "15.12.2024",
    amount: 800,
    description: "Оплата за интернет",
    status: "success",
  },
  {
    id: 3,
    date: "15.11.2024",
    amount: 800,
    description: "Оплата за интернет",
    status: "success",
  },
]

export function RecentPayments() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Последние платежи</CardTitle>
        <Button variant="ghost" size="sm">
          Все платежи
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">{payment.description}</p>
                <p className="text-xs text-muted-foreground">{payment.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{payment.amount} ₽</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Оплачено
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
