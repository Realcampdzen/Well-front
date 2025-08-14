import { Bell, Wifi, CreditCard, Settings, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const notifications = [
  {
    id: 1,
    title: "Пополнение баланса",
    message: "Баланс пополнен на 500 ₽",
    time: "2 мин назад",
    icon: CreditCard,
    unread: true,
  },
  {
    id: 2,
    title: "Техническое обслуживание",
    message: "Плановые работы завтра с 02:00 до 04:00",
    time: "1 час назад",
    icon: Settings,
    unread: true,
  },
  {
    id: 3,
    title: "Подключение восстановлено",
    message: "Интернет-соединение работает стабильно",
    time: "3 часа назад",
    icon: Wifi,
    unread: false,
  },
]

export function NotificationsDropdown() {
  const unreadCount = notifications.filter((n) => n.unread).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          Уведомления
          {unreadCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {unreadCount} новых
            </Badge>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {notifications.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">Нет уведомлений</div>
        ) : (
          notifications.map((notification) => {
            const Icon = notification.icon
            return (
              <DropdownMenuItem key={notification.id} className="p-3">
                <div className="flex items-start gap-3 w-full">
                  <div className={`p-2 rounded-full ${notification.unread ? "bg-primary/10" : "bg-muted"}`}>
                    <Icon className={`h-4 w-4 ${notification.unread ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-sm font-medium ${notification.unread ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {notification.title}
                      </p>
                      {notification.unread && <div className="h-2 w-2 bg-primary rounded-full"></div>}
                    </div>
                    <p className="text-xs text-muted-foreground">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              </DropdownMenuItem>
            )
          })
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-primary">
          <CheckCircle className="mr-2 h-4 w-4" />
          Отметить все как прочитанные
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
