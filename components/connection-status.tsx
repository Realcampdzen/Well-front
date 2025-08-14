import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, MapPin } from "lucide-react"

export function ConnectionStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Статус подключения</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm">Подключение активно</span>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Онлайн
          </Badge>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>г. Санкт-Петербург, ул. Примерная, д. 123, кв. 45</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Подключено: 15.08.2023</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <div className="text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">IP-адрес:</span>
              <span className="font-mono">192.168.1.100</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">MAC-адрес:</span>
              <span className="font-mono">AA:BB:CC:DD:EE:FF</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
