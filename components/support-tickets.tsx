import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock } from "lucide-react"

const tickets = [
  {
    id: "TICK-2025-001",
    subject: "Низкая скорость интернета",
    category: "Технические проблемы",
    status: "open",
    priority: "high",
    created: "14.01.2025 15:30",
    lastUpdate: "15.01.2025 09:15",
    messages: 3,
  },
  {
    id: "TICK-2024-045",
    subject: "Вопрос по тарифу Премиум",
    category: "Смена тарифа",
    status: "resolved",
    priority: "medium",
    created: "28.12.2024 11:20",
    lastUpdate: "29.12.2024 14:45",
    messages: 5,
  },
  {
    id: "TICK-2024-044",
    subject: "Настройка Wi-Fi роутера",
    category: "Оборудование",
    status: "closed",
    priority: "low",
    created: "15.12.2024 16:45",
    lastUpdate: "16.12.2024 10:30",
    messages: 2,
  },
]

export function SupportTickets() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Открыто
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            В работе
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Решено
          </Badge>
        )
      case "closed":
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-800">
            Закрыто
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge variant="destructive">Критический</Badge>
      case "high":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            Высокий
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Средний
          </Badge>
        )
      case "low":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Низкий
          </Badge>
        )
      default:
        return <Badge variant="secondary">{priority}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Мои обращения</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{ticket.subject}</h3>
                    {getStatusBadge(ticket.status)}
                    {getPriorityBadge(ticket.priority)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {ticket.category} • #{ticket.id}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Открыть
                </Button>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Создано: {ticket.created}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    <span>{ticket.messages} сообщений</span>
                  </div>
                </div>
                <span>Обновлено: {ticket.lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
